type SubscriptionType = "ADD" | "REMOVE";

interface Subscription {
  type: SubscriptionType;
  label: string;
}
