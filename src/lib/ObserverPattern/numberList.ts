export interface Observer {
  // events, payload, options...
  onNotify: (n: number) => void;
}

export class NumberItem implements Observer {
  value: number;
  subscriptions: Subscription[];
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
  // TODO: fix notification system
  onNotify(count: number) {
    for (const subscription of this.subscriptions) {
      switch (subscription.type) {
        case "ADDITION":
          console.log(`an addition operation occurred `);
          break;
        case "SUBTRACTION":
          console.log(`a subtraction operation occurred`);
        default:
          break;
      }
    }
  }
}

class Observable {
  protected observers: Observer[] = [];
  // make NumberItem generic
  notify(count: number) {
    for (let i = 0; i < this.observers.length; ++i) {
      this.observers[i].onNotify(count);
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

  public update(count: number) {
    console.log("update: ", count);
    this.obj.notify(count);
  }

  public get list() {
    return this.obj.values as NumberItem[];
  }
}
