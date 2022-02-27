type SubscriptionType = "ADD" | "REMOVE" | "ADDITION" | "SUBTRACTION";

interface Subscription {
  type: SubscriptionType;
  label: string;
}
