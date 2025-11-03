import { formatDate } from '@/core/utils/format';
import { Button } from '@/core/components/Button';
import type { MedicationListProps } from './types';

/**
 * @component MedicationList
 * @summary Displays list of medications with actions
 * @domain medication
 * @type domain-component
 * @category display
 */
export const MedicationList = ({
  medications,
  onEdit,
  onDelete,
  onViewDetails,
}: MedicationListProps) => {
  if (medications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum medicamento cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {medications.map((medication) => (
        <div
          key={medication.id}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{medication.name}</h3>
              <p className="text-sm text-gray-600">{medication.dosage}</p>
            </div>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                medication.status === 'ativo'
                  ? 'bg-green-100 text-green-800'
                  : medication.status === 'concluído'
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {medication.status}
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Forma:</span>
              <span className="text-gray-900 capitalize">{medication.pharmaceuticalForm}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Via:</span>
              <span className="text-gray-900 capitalize">{medication.administrationRoute}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Início:</span>
              <span className="text-gray-900">{formatDate(medication.startDate)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Estoque:</span>
              <span
                className={`font-medium ${
                  medication.currentStock <= medication.stockAlertLimit
                    ? 'text-red-600'
                    : 'text-gray-900'
                }`}
              >
                {medication.currentStock} unidades
              </span>
            </div>
          </div>

          {medication.currentStock <= medication.stockAlertLimit && (
            <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-md">
              <p className="text-xs text-red-800">⚠️ Estoque baixo</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              fullWidth
              onClick={() => onViewDetails(medication.id)}
            >
              Detalhes
            </Button>
            <Button size="sm" variant="ghost" onClick={() => onEdit(medication.id)}>
              Editar
            </Button>
            <Button size="sm" variant="danger" onClick={() => onDelete(medication.id)}>
              Excluir
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
