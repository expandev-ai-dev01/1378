import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/core/components/Button';
import type { MedicationFormProps } from './types';

const medicationSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres').max(100),
  dosage: z.string().min(1, 'Dosagem é obrigatória').max(50),
  pharmaceuticalForm: z.enum([
    'comprimido',
    'cápsula',
    'líquido',
    'injeção',
    'pomada',
    'spray',
    'gotas',
    'outros',
  ]),
  administrationRoute: z.enum([
    'oral',
    'tópica',
    'intravenosa',
    'intramuscular',
    'subcutânea',
    'inalatória',
    'oftálmica',
    'retal',
    'outra',
  ]),
  usageInstructions: z.string().max(500).optional(),
  startDate: z.string().min(1, 'Data de início é obrigatória'),
  endDate: z.string().optional(),
  initialStock: z.number().min(0, 'Estoque deve ser maior ou igual a zero').max(9999),
  stockAlertLimit: z.number().min(1, 'Limite deve estar entre 1 e 100').max(100),
  notes: z.string().max(1000).optional(),
});

type MedicationFormData = z.infer<typeof medicationSchema>;

/**
 * @component MedicationForm
 * @summary Form for creating/editing medications
 * @domain medication
 * @type domain-component
 * @category form
 */
export const MedicationForm = ({ initialData, onSubmit, onCancel }: MedicationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MedicationFormData>({
    resolver: zodResolver(medicationSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Medicamento *
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dosagem *</label>
          <input
            type="text"
            {...register('dosage')}
            placeholder="Ex: 500mg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.dosage && <p className="mt-1 text-sm text-red-600">{errors.dosage.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Forma Farmacêutica *
          </label>
          <select
            {...register('pharmaceuticalForm')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Selecione...</option>
            <option value="comprimido">Comprimido</option>
            <option value="cápsula">Cápsula</option>
            <option value="líquido">Líquido</option>
            <option value="injeção">Injeção</option>
            <option value="pomada">Pomada</option>
            <option value="spray">Spray</option>
            <option value="gotas">Gotas</option>
            <option value="outros">Outros</option>
          </select>
          {errors.pharmaceuticalForm && (
            <p className="mt-1 text-sm text-red-600">{errors.pharmaceuticalForm.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Via de Administração *
          </label>
          <select
            {...register('administrationRoute')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Selecione...</option>
            <option value="oral">Oral</option>
            <option value="tópica">Tópica</option>
            <option value="intravenosa">Intravenosa</option>
            <option value="intramuscular">Intramuscular</option>
            <option value="subcutânea">Subcutânea</option>
            <option value="inalatória">Inalatória</option>
            <option value="oftálmica">Oftálmica</option>
            <option value="retal">Retal</option>
            <option value="outra">Outra</option>
          </select>
          {errors.administrationRoute && (
            <p className="mt-1 text-sm text-red-600">{errors.administrationRoute.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Data de Início *</label>
          <input
            type="date"
            {...register('startDate')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Data de Término</label>
          <input
            type="date"
            {...register('endDate')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.endDate && <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Estoque Inicial *</label>
          <input
            type="number"
            {...register('initialStock', { valueAsNumber: true })}
            min="0"
            max="9999"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.initialStock && (
            <p className="mt-1 text-sm text-red-600">{errors.initialStock.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Limite de Alerta de Estoque *
          </label>
          <input
            type="number"
            {...register('stockAlertLimit', { valueAsNumber: true })}
            min="1"
            max="100"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.stockAlertLimit && (
            <p className="mt-1 text-sm text-red-600">{errors.stockAlertLimit.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Instruções de Uso</label>
        <textarea
          {...register('usageInstructions')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Ex: Tomar com alimentos"
        />
        {errors.usageInstructions && (
          <p className="mt-1 text-sm text-red-600">{errors.usageInstructions.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Observações</label>
        <textarea
          {...register('notes')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.notes && <p className="mt-1 text-sm text-red-600">{errors.notes.message}</p>}
      </div>

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar Medicamento'}
        </Button>
      </div>
    </form>
  );
};
