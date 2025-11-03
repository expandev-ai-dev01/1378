export type ErrorMessageVariant = 'error' | 'warning' | 'info';

export interface ErrorMessageProps {
  title: string;
  message: string;
  onRetry?: () => void;
  onBack?: () => void;
  variant?: ErrorMessageVariant;
}
