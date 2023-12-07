import { DiffFile } from "@/types";
import { Change, diffWordsWithSpace } from "diff";

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