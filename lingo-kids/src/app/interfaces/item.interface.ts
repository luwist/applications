export interface Item {
  id: number;
  icon: string;
  command: () => void;
  itemDefault?: boolean;
}
