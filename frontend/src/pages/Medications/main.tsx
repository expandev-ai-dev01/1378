import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMedicationList } from '@/domain/medication/hooks/useMedicationList';
import { MedicationList } from '@/domain/medication/components/MedicationList';
import { Button } from '@/core/components/Button';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';

/**
 * @page MedicationsPage
 * @summary Medications management page
 * @domain medication
 * @type list-page
 * @category medication-management
 *
 * @routing
 * - Path: /medications
 * - Params: none
 * - Query: none
 * - Guards: Authentication required
 */
export const MedicationsPage = () => {
  const navigate = useNavigate();
  const { medications, isLoading, error, remove } = useMedicationList();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    navigate(`/medications/${id}/edit`);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja excluir este medicamento?')) {
      return;
    }

    try {
      setDeletingId(id);
      await remove(id);
    } catch (err: unknown) {
      console.error('Error deleting medication:', err);
      alert('Erro ao excluir medicamento');
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewDetails = (id: string) => {
    navigate(`/medications/${id}`);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Erro ao carregar medicamentos"
        message="Não foi possível carregar a lista de medicamentos. Tente novamente."
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meus Medicamentos</h1>
          <p className="text-gray-600 mt-1">Gerencie seus medicamentos e lembretes</p>
        </div>
        <Button onClick={() => navigate('/medications/new')}>Adicionar Medicamento</Button>
      </div>

      <MedicationList
        medications={medications}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
};

export default MedicationsPage;
