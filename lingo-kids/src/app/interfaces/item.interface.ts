export interface Item {
  icon: string;
  command: () => void;
  itemDefault?: boolean;
}
