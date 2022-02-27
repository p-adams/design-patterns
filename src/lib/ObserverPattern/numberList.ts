export interface Observer {
  // events, payload, options...
  onNotify: (n: number, event: CountEvent) => void;
}

export class NumberItem implements Observer {
  value: number;
  subscriptions: Subscription[];
  private _incrementMessage: string = "";
  private _decrementMessage: string = "";
  constructor(value: number) {
    this.value = value;
    this.subscriptions = [];
  }

  subscribe(subcription: Subscription) {
    this.subscriptions.push(subcription);
  }

  unsubscribe(subcription: Subscription) {
    const idx = this.subscriptions.findIndex(
      (sub) => (sub.type = subcription.type)
    );
    if (idx > -1) {
      this.subscriptions.splice(idx, 1);
    }
  }

  public get incrementMessage(): string {
    return this._incrementMessage;
  }

  public set incrementMessage(v: string) {
    this._incrementMessage = v;
  }

  public get decrementMessage(): string {
    return this._decrementMessage;
  }

  public set decrementMessage(v: string) {
    this._decrementMessage = v;
  }

  onNotify(count: number, event: CountEvent) {
    switch (event) {
      case "INC":
        if (this.hasSubscripton(event)) {
          this.incrementMessage = `${this.value} sees count incremented and is now: ${count} `;
        } else {
          this.incrementMessage = "";
        }
        break;
      case "DEC":
        if (this.hasSubscripton(event)) {
          this.decrementMessage = `${this.value} sees count decremented and is now: ${count} `;
        } else {
          this.decrementMessage = "";
        }
        break;
      default:
        break;
    }
  }
  hasSubscripton(event: CountEvent) {
    return this.subscriptions.find((sub) => sub.type === event);
  }
}

class Observable {
  protected observers: Observer[] = [];

  notify(count: number, event: CountEvent) {
    for (let i = 0; i < this.observers.length; ++i) {
      this.observers[i].onNotify(count, event);
    }
  }

  public addObserver(o: Observer) {
    this.observers.push(o);
    return this.observers;
  }

  public removeObserver(o: Observer) {
    const index = this.observers.findIndex((oo) => oo === o);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
    return this.observers;
  }

  public get values(): Observer[] {
    return this.observers;
  }
}

export class NumberList {
  private obj = new Observable();

  public addNumber(n: NumberItem) {
    return this.obj.addObserver(n) as NumberItem[];
  }

  public removeNumber(n: NumberItem) {
    return this.obj.removeObserver(n) as NumberItem[];
  }

  public update(count: number, event: CountEvent) {
    this.obj.notify(count, event);
  }

  public get list() {
    return this.obj.values as NumberItem[];
  }
}
