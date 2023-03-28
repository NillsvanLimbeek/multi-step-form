export interface AddOn {
  title: AddOnTitle;
  subtitle: string;
  price: number;
}

export type AddOnTitle =
  | 'online-service'
  | 'larger-storage'
  | 'customizable-profile';
