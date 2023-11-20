export function toLowerCaseText(value: any): string {
  if (value == null) return '';
  if (typeof value === 'string') return value.toLowerCase();
  return String(value).toLowerCase();
}
