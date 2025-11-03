import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type error-page
 * @category public
 *
 * @routing
 * - Path: *
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @description
 * Displays a user-friendly 404 error message with navigation
 * back to home page.
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button onClick={() => navigate('/')}>Voltar para Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
