import {
  OHTableFilterFn,
  OHTableFilterList,
  OHTableSortFn,
  OHTableSortOrder
} from '@onehealth/ui/table';

/**
 * Generic column definition for OH Table
 */
export interface ColumnItem<T> {
  name: string;
  sortOrder: OHTableSortOrder | null;
  sortFn: OHTableSortFn<T> | null;
  sortDirections: OHTableSortOrder[];
  listOfFilter: OHTableFilterList;
  filterFn: OHTableFilterFn<T> | null;
  filterMultiple: boolean;
}
