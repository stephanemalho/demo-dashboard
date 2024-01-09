import { DiffFile } from "@/types";
import { Change, diffWordsWithSpace } from "diff";

export const getElementLength = (element: any) => {
  // Vérifier si l'élément est un tableau
  if (Array.isArray(element)) {
    // Vérifier si le tableau contient au moins un élément et si cet élément est un objet
    if (element.length > 0 && typeof element[0] === 'object') {
      // Retourner le nombre de clés dans le premier objet du tableau
      return Object.keys(element[0]).length;
    } else {
      // Retourner 0 si le tableau est vide ou ne contient pas d'objets
      return 0;
    }
  } else {
    // Si l'élément n'est pas un tableau, retourner 0
    return 0;
  }
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

export function newLinesCount(
  oldText: DiffFile,
  newText: DiffFile,
  lineHasChanges: (changes: Change[]) => boolean
): number {
  return oldText.content.reduce((count, oldLine, index) => {
    const newLine = newText.content[index] || "";
    const changes = diffWordsWithSpace(oldLine, newLine);
    return count + (lineHasChanges(changes) ? 1 : 0);
  }, 0);
}

// Directly returns the total number of new lines
export function totalLines(newText: DiffFile): number {
  return newText.content.length;
}

// compare line in array
export const lineHasChanges = (changes: Change[]) =>
changes.some((change) => change.added || change.removed);