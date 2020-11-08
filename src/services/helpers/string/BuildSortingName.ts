import { TableSortingDirection } from '@/types/buefy/components/Table';

export const BuildSortingName = (name: string, direction: TableSortingDirection) => (direction === TableSortingDirection.ASCENDING ? `-${name}` : name);
