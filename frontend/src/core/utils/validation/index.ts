/**
 * @utility isValidEmail
 * @summary Validates email format
 * @category validation
 *
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * @utility isValidPhone
 * @summary Validates Brazilian phone format
 * @category validation
 *
 * @param {string} phone - Phone to validate
 * @returns {boolean} True if valid phone
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return phoneRegex.test(phone);
};
