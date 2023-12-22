// Helper functions to get classes for headers and cells
export function getClassForHeader(columnId: string): string {
  switch (columnId) {
    case 'PACKAGE NAME':
    case 'CREATION DATE':
      return 'w-1/2';
    case 'ACTIONS':
      return 'w-[330px]';
    default:
      return '';
  }
}

export function getClassForCell(columnId: string): string {
  switch (columnId) {
    case 'PACKAGE NAME':
    case 'CREATION DATE':
      return 'w-1/2';
    case 'ACTIONS':
      return 'w-[330px]';
    default:
      return '';
  }
}