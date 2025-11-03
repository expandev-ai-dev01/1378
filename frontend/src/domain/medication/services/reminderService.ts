import { authenticatedClient } from '@/core/lib/api';
import type { Reminder, CreateReminderDto, UpdateReminderDto } from '../types';

/**
 * @service reminderService
 * @summary Reminder management service for authenticated endpoints
 * @domain medication
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/reminder/...
 */
export const reminderService = {
  /**
   * @endpoint GET /api/v1/internal/reminder/medication/:medicationId
   * @summary Fetches reminders for a specific medication
   */
  async listByMedication(medicationId: string): Promise<Reminder[]> {
    const response = await authenticatedClient.get(`/reminder/medication/${medicationId}`);
    return response.data.data;
  },

  /**
   * @endpoint GET /api/v1/internal/reminder/:id
   * @summary Fetches single reminder by ID
   */
  async getById(id: string): Promise<Reminder> {
    const response = await authenticatedClient.get(`/reminder/${id}`);
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/internal/reminder
   * @summary Creates new reminder
   */
  async create(data: CreateReminderDto): Promise<Reminder> {
    const response = await authenticatedClient.post('/reminder', data);
    return response.data.data;
  },

  /**
   * @endpoint PUT /api/v1/internal/reminder/:id
   * @summary Updates existing reminder
   */
  async update(id: string, data: UpdateReminderDto): Promise<Reminder> {
    const response = await authenticatedClient.put(`/reminder/${id}`, data);
    return response.data.data;
  },

  /**
   * @endpoint DELETE /api/v1/internal/reminder/:id
   * @summary Deletes reminder
   */
  async delete(id: string): Promise<void> {
    await authenticatedClient.delete(`/reminder/${id}`);
  },
};
