import { authenticatedClient } from '@/core/lib/api';
import type {
  Medication,
  CreateMedicationDto,
  UpdateMedicationDto,
  MedicationListParams,
} from '../types';

/**
 * @service medicationService
 * @summary Medication management service for authenticated endpoints
 * @domain medication
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/medication/...
 *
 * Authentication token is automatically added by interceptor.
 */
export const medicationService = {
  /**
   * @endpoint GET /api/v1/internal/medication
   * @summary Fetches list of medications with filters
   */
  async list(params?: MedicationListParams): Promise<Medication[]> {
    const response = await authenticatedClient.get('/medication', { params });
    return response.data.data;
  },

  /**
   * @endpoint GET /api/v1/internal/medication/:id
   * @summary Fetches single medication by ID
   */
  async getById(id: string): Promise<Medication> {
    const response = await authenticatedClient.get(`/medication/${id}`);
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/internal/medication
   * @summary Creates new medication
   */
  async create(data: CreateMedicationDto): Promise<Medication> {
    const response = await authenticatedClient.post('/medication', data);
    return response.data.data;
  },

  /**
   * @endpoint PUT /api/v1/internal/medication/:id
   * @summary Updates existing medication
   */
  async update(id: string, data: UpdateMedicationDto): Promise<Medication> {
    const response = await authenticatedClient.put(`/medication/${id}`, data);
    return response.data.data;
  },

  /**
   * @endpoint DELETE /api/v1/internal/medication/:id
   * @summary Deletes medication
   */
  async delete(id: string): Promise<void> {
    await authenticatedClient.delete(`/medication/${id}`);
  },
};
