import { clsx } from 'clsx';
import type { ErrorMessageVariant } from './types';

export interface ErrorMessageVariantProps {
  variant?: ErrorMessageVariant;
}

export function getErrorMessageClassName(props: ErrorMessageVariantProps): string {
  const { variant = 'error' } = props;

  return clsx('max-w-md w-full p-8 rounded-lg shadow-lg', {
    'bg-red-50 border border-red-200': variant === 'error',
    'bg-yellow-50 border border-yellow-200': variant === 'warning',
    'bg-blue-50 border border-blue-200': variant === 'info',
  });
}
