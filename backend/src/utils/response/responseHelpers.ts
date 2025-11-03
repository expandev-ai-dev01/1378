/**
 * @summary Standard API response helpers
 * @description Provides consistent response formatting across the application
 */

/**
 * @interface SuccessResponse
 * @description Standard success response structure
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @interface ErrorResponse
 * @description Standard error response structure
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary Creates a success response
 * @param data Response data
 * @param metadata Optional metadata
 * @returns Formatted success response
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    ...(metadata && {
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
      },
    }),
  };
}

/**
 * @summary Creates an error response
 * @param message Error message
 * @param code Error code
 * @param details Optional error details
 * @returns Formatted error response
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
}
