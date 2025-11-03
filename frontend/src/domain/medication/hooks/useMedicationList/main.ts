import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { medicationService } from '../../services/medicationService';
import type { UseMedicationListOptions, UseMedicationListReturn } from './types';

/**
 * @hook useMedicationList
 * @summary Hook for managing medication list with CRUD operations
 * @domain medication
 * @type domain-hook
 * @category data
 *
 * @description
 * Provides medication list data and operations using TanStack Query
 * for caching and state management.
 */
export const useMedicationList = (
  options: UseMedicationListOptions = {}
): UseMedicationListReturn => {
  const queryClient = useQueryClient();
  const queryKey = ['medications', options.filters];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () => medicationService.list(options.filters),
  });

  const { mutateAsync: create, isPending: isCreating } = useMutation({
    mutationFn: medicationService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medications'] });
    },
  });

  const { mutateAsync: update, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => medicationService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medications'] });
    },
  });

  const { mutateAsync: remove, isPending: isRemoving } = useMutation({
    mutationFn: medicationService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medications'] });
    },
  });

  return {
    medications: data || [],
    isLoading,
    error,
    refetch,
    create,
    update,
    remove,
    isCreating,
    isUpdating,
    isRemoving,
  };
};
