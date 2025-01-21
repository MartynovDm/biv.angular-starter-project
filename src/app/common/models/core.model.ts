export type SelectableItem<T> = {
  value: T;
  viewValue: string;
};

export type HandBookItem<T> = {
  id: number;
  name: string;
  sbs_category_name?: string;
  short_name?: string;
  key: T;
};
