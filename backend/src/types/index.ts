/**
 * @summary Global type definitions
 * @description Common types used across the application
 */

/**
 * @interface PaginationParams
 * @description Standard pagination parameters
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/**
 * @interface PaginatedResponse
 * @description Standard paginated response structure
 */
export interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}
