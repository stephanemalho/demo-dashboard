import React from "react";
import DiffLine from "./DiffLine";
import { diffWordsWithSpace } from "diff";

function LinesToCompare(renderNonModifiedBlock: (start: unknown, end: number) => React.JSX.Element, oldTextElements: React.JSX.Element[], newTextElements: React.JSX.Element[], visibleLines: Set<unknown>, oldText: any, newText: any, isSmallScreen: any) {
  return (start: any, end: number, isOld: boolean) => {
    // Ajoutez le bouton DiffButton pour chaque bloc non modifié
    const button = renderNonModifiedBlock(start, end);
    (isOld ? oldTextElements : newTextElements).push(button);

    // Ajoutez les lignes non modifiées ou ajoutées seulement si elles sont visibles
    for (let i = start; i <= end; i++) {
      if (visibleLines.has(i)) {
        const lineElement = (
          <DiffLine
            key={`${isOld ? 'old' : 'new'}-line-${i}`}
            changes={diffWordsWithSpace(
              isOld ? oldText.content[i] : newText.content[i],
              isOld ? newText.content[i] || "" : oldText.content[i] || ""
            )}
            lineNum={i + 1}
            isOld={isOld}
            isVisible={visibleLines.has(i)}
            isSmallScreen={isSmallScreen} />
        );
        (isOld ? oldTextElements : newTextElements).push(lineElement);
      }
    }
  };
}

export default LinesToCompare;