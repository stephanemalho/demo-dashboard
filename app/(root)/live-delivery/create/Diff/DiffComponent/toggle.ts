// Définir la fonction `toggleLines` en dehors du composant

import { lineHasChanges } from "@/lib/utils/arrays";
import { diffWordsWithSpace } from "diff";
import React from "react";
import { TextContent } from "./RenderDiffLines";

// Remarquez que nous passons `updateVisibleLines` au lieu de `setVisibleLines`
export function toggleLines(
  setShowAllNonModified: React.Dispatch<React.SetStateAction<boolean>>,
  showAllNonModified: boolean,
  oldText: TextContent,
  newText: TextContent,
  updateVisibleLines: (lines: Set<any>) => void // Utilisez le bon type pour `any`
) {
  setShowAllNonModified(!showAllNonModified);

  if (!showAllNonModified) {
    const allLines = new Set();
    oldText.content.forEach((_: any, index: number) => {
      if (
        !lineHasChanges(
          diffWordsWithSpace(
            oldText.content[index],
            newText.content[index] || ""
          )
        )
      ) {
        allLines.add(index);
      }
    });
    updateVisibleLines(allLines);
  } else {
    updateVisibleLines(new Set());
  }
}

export function toggleVisibilityLines(
  visibleLines: Set<number | unknown>, // Utilisez le bon type pour vos indices de lignes
  start: number, // Utilisez le bon type pour `start`
  end: number,
  updateVisibleLines: (newVisibleLines: Set<number | unknown>) => void // Le callback pour mettre à jour l'état
) {
  const newVisibleLines = new Set(visibleLines);
  for (let i = start; i <= end; i++) {
    if (newVisibleLines.has(i)) {
      newVisibleLines.delete(i);
    } else {
      newVisibleLines.add(i);
    }
  }
  updateVisibleLines(newVisibleLines);
}

export const scrollToCorrespondingLine = (lineNum: any) => {
  const correspondingLineIdOld = `line-old-${lineNum}`;
  const correspondingLineIdNew = `line-new-${lineNum}`;
  const elementOld = document.getElementById(correspondingLineIdOld);
  const elementNew = document.getElementById(correspondingLineIdNew);

  if (elementOld) {
    elementOld.scrollIntoView({ behavior: 'smooth', block: 'center' });
    console.log("test",elementOld
      );
    
  }
  if (elementNew) {
    elementNew.scrollIntoView({ behavior: 'smooth', block: 'center' });
    console.log("test2",elementNew
      );
  }
};