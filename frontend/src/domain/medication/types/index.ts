export interface Medication {
  id: string;
  name: string;
  dosage: string;
  pharmaceuticalForm:
    | 'comprimido'
    | 'cápsula'
    | 'líquido'
    | 'injeção'
    | 'pomada'
    | 'spray'
    | 'gotas'
    | 'outros';
  administrationRoute:
    | 'oral'
    | 'tópica'
    | 'intravenosa'
    | 'intramuscular'
    | 'subcutânea'
    | 'inalatória'
    | 'oftálmica'
    | 'retal'
    | 'outra';
  usageInstructions?: string;
  startDate: string;
  endDate?: string;
  photo?: string;
  initialStock: number;
  currentStock: number;
  stockAlertLimit: number;
  notes?: string;
  userId: string;
  createdAt: string;
  status: 'ativo' | 'inativo' | 'concluído';
}

export interface CreateMedicationDto {
  name: string;
  dosage: string;
  pharmaceuticalForm: Medication['pharmaceuticalForm'];
  administrationRoute: Medication['administrationRoute'];
  usageInstructions?: string;
  startDate: string;
  endDate?: string;
  photo?: string;
  initialStock: number;
  stockAlertLimit: number;
  notes?: string;
}

export interface UpdateMedicationDto extends Partial<CreateMedicationDto> {
  status?: Medication['status'];
}

export interface MedicationListParams {
  status?: Medication['status'];
  search?: string;
  page?: number;
  limit?: number;
}

export interface Reminder {
  id: string;
  medicationId: string;
  frequencyType: 'diário' | 'semanal' | 'mensal' | 'específico';
  times: string[];
  weekDays?: string[];
  monthDays?: number[];
  specificDates?: string[];
  doseInterval?: number;
  quantityPerDose: number;
  notificationSound: 'padrão' | 'alarme' | 'suave' | 'personalizado';
  anticipationTime?: number;
  repeatNotification: boolean;
  repeatInterval?: number;
  maxRepetitions?: number;
  status: 'ativo' | 'inativo' | 'pausado';
}

export interface CreateReminderDto {
  medicationId: string;
  frequencyType: Reminder['frequencyType'];
  times: string[];
  weekDays?: string[];
  monthDays?: number[];
  specificDates?: string[];
  doseInterval?: number;
  quantityPerDose: number;
  notificationSound?: Reminder['notificationSound'];
  anticipationTime?: number;
  repeatNotification?: boolean;
  repeatInterval?: number;
  maxRepetitions?: number;
}

export interface UpdateReminderDto extends Partial<CreateReminderDto> {
  status?: Reminder['status'];
}
