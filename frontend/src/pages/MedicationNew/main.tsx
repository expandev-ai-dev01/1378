import { useNavigate } from 'react-router-dom';
import { useMedicationList } from '@/domain/medication/hooks/useMedicationList';
import { MedicationForm } from '@/domain/medication/components/MedicationForm';
import type { CreateMedicationDto } from '@/domain/medication/types';

/**
 * @page MedicationNewPage
 * @summary Page for creating new medication
 * @domain medication
 * @type form-page
 * @category medication-management
 *
 * @routing
 * - Path: /medications/new
 * - Params: none
 * - Query: none
 * - Guards: Authentication required
 */
export const MedicationNewPage = () => {
  const navigate = useNavigate();
  const { create } = useMedicationList();

  const handleSubmit = async (data: CreateMedicationDto) => {
    try {
      const medication = await create(data);
      alert('Medicamento cadastrado com sucesso!');
      navigate(`/medications/${medication.id}/reminders/new`);
    } catch (error: unknown) {
      console.error('Error creating medication:', error);
      alert('Erro ao cadastrar medicamento');
    }
  };

  const handleCancel = () => {
    navigate('/medications');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Novo Medicamento</h1>
        <p className="text-gray-600 mt-1">Cadastre um novo medicamento no sistema</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <MedicationForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default MedicationNewPage;
