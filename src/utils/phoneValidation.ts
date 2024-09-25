export function isValidUkrainianPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+38|38)?0\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}
