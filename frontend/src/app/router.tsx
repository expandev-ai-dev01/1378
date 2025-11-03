import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { MainLayout } from '@/pages/layouts/MainLayout';

const HomePage = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @component AppRouter
 * @summary Main application routing configuration
 * @domain core
 * @type router-component
 * @category navigation
 *
 * @description
 * Defines all application routes with lazy loading for code splitting.
 * Uses Suspense for loading states and MainLayout for consistent structure.
 *
 * @routing
 * - Path: / - Home page
 * - Path: * - 404 Not Found page
 */
export const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
