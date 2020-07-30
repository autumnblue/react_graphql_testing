import { AppState } from 'store';

export const getSelectedIds = ({ nutrition }: AppState): string[] => nutrition.selectedIds;
