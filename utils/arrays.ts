export const getElementLength = (element: any) => {
    return Object.keys(element).length;
  };

// function that get all user in the data and reduce the sibling with the same name
export const getUnique = (arr: any, comp: any) => {
  const unique = arr
  .map((e: any) => e[comp])
  .map((e: any, i: any, final: any) => final.indexOf(e) === i && i)
  .filter((e: any) => arr[e])
  .map((e: any) => arr[e]);
  return unique;
};