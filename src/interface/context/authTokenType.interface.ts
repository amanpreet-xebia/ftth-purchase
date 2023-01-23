export interface AuthTokenType {
  authToken: string;
  setAuthToken: (token: string) => void;
  orderID: string;
  setOrderID: (orderId: string) => void;
}
