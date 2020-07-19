export interface IPhone {
  _id?: string;
  name?: string;
  manufacturer?: string;
  images?: string;
  price?: number;
  color?: string;
  description?: string;
  processor?: string;
  ram?: string;
  screen?: string;
}

export interface IButton {
  label: string;
  className: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IFetchedData {
  data: Array<Object>;
}
