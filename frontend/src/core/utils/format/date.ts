import { format, parseISO, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * @utility formatDate
 * @summary Formats date to Brazilian format
 * @category date
 *
 * @param {string | Date} date - Date to format
 * @param {string} formatStr - Format string (default: 'dd/MM/yyyy')
 * @returns {string} Formatted date string
 */
export const formatDate = (date: string | Date, formatStr: string = 'dd/MM/yyyy'): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;

    if (!isValid(dateObj)) {
      return '';
    }

    return format(dateObj, formatStr, { locale: ptBR });
  } catch (error: unknown) {
    console.error('Error formatting date:', error);
    return '';
  }
};

/**
 * @utility formatDateTime
 * @summary Formats date and time to Brazilian format
 * @category date
 *
 * @param {string | Date} date - Date to format
 * @returns {string} Formatted date and time string
 */
export const formatDateTime = (date: string | Date): string => {
  return formatDate(date, "dd/MM/yyyy 'às' HH:mm");
};

/**
 * @utility formatTime
 * @summary Formats time only
 * @category date
 *
 * @param {string | Date} date - Date to format
 * @returns {string} Formatted time string
 */
export const formatTime = (date: string | Date): string => {
  return formatDate(date, 'HH:mm');
};
