interface Observer {
  onNotify: (n: NumberItem, type: SubscriptionType) => void;
}

export class NumberItem implements Observer {
  //onNotify: (type: "ADD") => void;
  value: number;
  constructor(value: number) {
    this.value = value;
  }

  onNotify(n: NumberItem, type: SubscriptionType) {
    if (this.value === n.value) return;
    switch (type) {
      case "ADD":
        console.log(`${this.value} said hi, ${n.value}`);
        break;
      case "REMOVE":
        console.log(`${this.value} said bye, ${n.value}`);
      default:
        break;
    }
  }
}

class Observable {
  protected observers: Observer[] = [];
  notify(n: NumberItem, type: SubscriptionType) {
    for (let i = 0; i < this.observers.length; ++i) {
      this.observers[i].onNotify(n, type);
    }
  }
  public addObserver(o: Observer) {
    this.observers.push(o);
    return this;
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
    this.obj.addObserver(n).notify(n, "ADD");
  }

  public removeNumber(n: NumberItem) {
    this.obj.notify(n, "REMOVE");
    return this.obj.removeObserver(n) as NumberItem[];
  }

  public get list() {
    return this.obj.values as NumberItem[];
  }
}
