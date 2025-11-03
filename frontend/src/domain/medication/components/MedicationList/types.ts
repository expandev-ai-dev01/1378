import type { Medication } from '../../types';

export interface MedicationListProps {
  medications: Medication[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onViewDetails: (id: string) => void;
}
