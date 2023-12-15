import { diffWordsWithSpace } from "diff";
import DiffLine from "./DiffLine";
import { JSX } from "react";
import { TextContent } from "./RenderDiffLines";


function LinesToCompare(renderNonModifiedBlock: { (start: number, end: number, position: any): JSX.Element; (arg0: any, arg1: any, arg2: string): any; }, oldTextElements: JSX.Element[], newTextElements: JSX.Element[], visibleLines: Set<unknown>, oldText: TextContent, newText: TextContent, isSmallScreen: boolean) {
  return (start: number, end: number, isOld: boolean) => {
    // Ajouter le bouton 'top' DiffButton
    const buttonTop = renderNonModifiedBlock(start, end, 'top');
    (isOld ? oldTextElements : newTextElements).push(buttonTop);

    // Ajouter les lignes non modifiées ou ajoutées si elles sont visibles
    for (let i = start; i <= end; i++) {
      if (visibleLines.has(i)) {
        const lineElement = <DiffLine
          key={`${isOld ? 'old' : 'new'}-line-${i}`}
          changes={diffWordsWithSpace(isOld ? oldText.content[i] : newText.content[i], isOld ? newText.content[i] || "" : oldText.content[i] || "")}
          lineNum={i + 1}
          isOld={isOld}
          isVisible={visibleLines.has(i)}
          isSmallScreen={isSmallScreen}
        />;
        (isOld ? oldTextElements : newTextElements).push(lineElement);
      }
    }

    // Ajouter le bouton 'bottom' DiffButton si les lignes sont visibles
    if (visibleLines.has(start)) {
      const buttonBottom = renderNonModifiedBlock(start, end, 'bottom');
      (isOld ? oldTextElements : newTextElements).push(buttonBottom);
    }
  };
}

export default LinesToCompare;