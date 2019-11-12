import getTypography from "../getSketchData/getTypographyFonts";
import getColorFills from "../getSketchData/getColorFills";

export const formatCss = () => {
  const stylesheet = [];

  if (getColorFills) {
    stylesheet.push(
      getColorFills.map(
        item => `
.${item.name} {
  color: ${item.color.slice(0, -2)};
}
  `
      )
    );
  }

  if (getTypography) {
    stylesheet.push(
      getTypography.map(
        heading => `
.${heading.name} {
  line-height: ${heading.style.lineHeight};
  font-size: ${heading.style.fontSize};
  font-weight: ${heading.style.fontWeight};
  color: ${heading.style.textColor.slice(0, -2)};
  font-family: '${heading.style.fontFamily}';
}
  `
      )
    );
  }

  if (getTypography) {
    stylesheet.push(
      getParagraphFonts.map(
        paragraph => `
.${paragraph.name} {
  line-height: ${paragraph.style.lineHeight};
  font-size: ${paragraph.style.fontSize};
  font-weight: ${paragraph.style.fontWeight};
  color: ${paragraph.style.textColor.slice(0, -2)};
  font-family: '${paragraph.style.fontFamily}';
}
  `
      )
    );
  }
  return stylesheet.flat().join("");
};
