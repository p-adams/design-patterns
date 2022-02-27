type SubscriptionType = "INC" | "DEC";
type CountEvent = "INC" | "DEC";
interface Subscription {
  type: SubscriptionType;
  label: string;
}
