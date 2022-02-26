export type SubscriptionType = "ADD";

export interface Subscription {
  type: SubscriptionType;
  label: string;
}

interface Observer {
  onNotify: (subscription: Subscription, type: SubscriptionType) => void;
}

export class Subject {
  observers: Observer[] = [];
  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }
  public removeObserver(observer: Observer) {
    const index = this.observers.findIndex(
      (_observer) => _observer === observer
    );
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
}
