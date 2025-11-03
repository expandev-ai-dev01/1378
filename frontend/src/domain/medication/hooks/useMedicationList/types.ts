import type {
  Medication,
  MedicationListParams,
  CreateMedicationDto,
  UpdateMedicationDto,
} from '../../types';

export interface UseMedicationListOptions {
  filters?: MedicationListParams;
}

export interface UseMedicationListReturn {
  medications: Medication[];
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
  create: (data: CreateMedicationDto) => Promise<Medication>;
  update: (params: { id: string; data: UpdateMedicationDto }) => Promise<Medication>;
  remove: (id: string) => Promise<void>;
  isCreating: boolean;
  isUpdating: boolean;
  isRemoving: boolean;
}
