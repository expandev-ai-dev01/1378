import { clsx } from 'clsx';
import type { LoadingSpinnerSize } from './types';

export interface LoadingSpinnerVariantProps {
  size?: LoadingSpinnerSize;
  className?: string;
}

export function getLoadingSpinnerClassName(props: LoadingSpinnerVariantProps): string {
  const { size = 'medium', className } = props;

  return clsx(
    'text-primary-600',
    {
      'w-6 h-6': size === 'small',
      'w-10 h-10': size === 'medium',
      'w-16 h-16': size === 'large',
    },
    className
  );
}
