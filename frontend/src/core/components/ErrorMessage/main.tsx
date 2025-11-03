import { getErrorMessageClassName } from './variants';
import type { ErrorMessageProps } from './types';

/**
 * @component ErrorMessage
 * @summary Error display component with retry functionality
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {string} title - Error title
 * @param {string} message - Error message
 * @param {Function} onRetry - Retry callback
 * @param {Function} onBack - Back navigation callback
 *
 * @accessibility
 * - ARIA: role="alert" for error announcement
 * - Keyboard: Buttons are keyboard accessible
 */
export const ErrorMessage = ({
  title,
  message,
  onRetry,
  onBack,
  variant = 'error',
}: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[400px]">
      <div className={getErrorMessageClassName({ variant })} role="alert">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex gap-4 justify-center">
            {onRetry && (
              <button
                onClick={onRetry}
                className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Tentar Novamente
              </button>
            )}
            {onBack && (
              <button
                onClick={onBack}
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
