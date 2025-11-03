import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Loading indicator component with size variants
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {LoadingSpinnerSize} size - Spinner size (small, medium, large)
 * @param {string} className - Additional CSS classes
 *
 * @styling
 * - Variants: small, medium, large
 * - Responsive: Maintains aspect ratio
 *
 * @accessibility
 * - ARIA: role="status" with aria-label
 * - Screen Reader: Announces loading state
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div
        className={getLoadingSpinnerClassName({ size, className })}
        role="status"
        aria-label="Loading"
      >
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    </div>
  );
};
