type ObjectValues<T> = T[keyof T];

export type Product = {
  id: string;
  name: string;
  image: string[];
  amount: number;
  price: number;
  status: "published" | "private";
};

export const OrderStatus = {
  paid: "paid",
  unpaid: "unpaid",
  processing: "processing",
} as const;

export type Order = {
  id: string;
  price: number;
  method: string;
  status: ObjectValues<typeof OrderStatus>;
};
