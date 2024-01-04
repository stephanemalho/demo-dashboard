// Helper functions to get classes for headers and cells
export function getClassForHeader(columnId: string): string {
  switch (columnId) {
    case 'PACKAGE NAME':
      return 'w-[50vw]';
    case 'CREATION DATE':
      return 'w-[10vw]';
    // case 'ACTIONS':
    //   return ''; 
    default:
      return '';
  }
}

export function getClassForCell(columnId: string): string {
  switch (columnId) {
    case 'PACKAGE_NAME':
      return 'w-full';
    case 'CREATION_DATE':
      return 'w-[150px] bg-pink-500';
    case 'ACTIONS':
      return 'w-full';
    default:
      return '';
  }
}
