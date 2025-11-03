import type { CreateMedicationDto } from '../../types';

export interface MedicationFormProps {
  initialData?: Partial<CreateMedicationDto>;
  onSubmit: (data: CreateMedicationDto) => void | Promise<void>;
  onCancel: () => void;
}
