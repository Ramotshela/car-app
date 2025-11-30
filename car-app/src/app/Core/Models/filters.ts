export interface FilterItem {
  id: string;
  name: string;
  categoryDto?: CategoryDto[];
}
export interface CategoryDto{
  id: string;
  name: string;
}
