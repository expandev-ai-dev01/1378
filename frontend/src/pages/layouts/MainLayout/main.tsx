import { Outlet } from 'react-router-dom';
import type { MainLayoutProps } from './types';

/**
 * @component MainLayout
 * @summary Main application layout with header and content area
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @layout
 * - Layout: Main application layout
 * - Sections: Header, Content
 * - Navigation: Top navigation bar
 *
 * @description
 * Provides consistent layout structure for all pages with header
 * and main content area. Uses Outlet for nested route rendering.
 */
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Lembrete de Medicamentos</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children || <Outlet />}</main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2024 Lembrete de Medicamentos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
