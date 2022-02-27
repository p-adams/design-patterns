type SubscriptionType = "ADDITION" | "SUBTRACTION";

interface Subscription {
  type: SubscriptionType;
  label: string;
}
