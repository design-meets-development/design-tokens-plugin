import getTypography from '../getSketchData/getTypographyFonts';
import getColorFills from '../getSketchData/getColorFills';

export const formatScss = () => {
  const stylesheet = [];

  if (getColorFills) {
    stylesheet.push(getColorFills.map(item => `
  $${item.name}: ${item.color};
    `));
  }

  if (getTypography) {
    stylesheet.push(getTypography.map(heading => `
.${heading.name} {
  line-height: ${heading.style.lineHeight};
  font-size: ${heading.style.fontSize};
  font-weight: ${heading.style.fontWeight};
  color: ${heading.style.textColor};
  font-family: ${heading.style.fontFamily};
}
    `));
  }

  if (getTypography) {
    stylesheet.push(getParagraphFonts.map(paragraph => `
.${paragraph.name} {
  line-height: ${paragraph.style.lineHeight};
  font-size: ${paragraph.style.fontSize};
  font-weight: ${paragraph.style.fontWeight};
  color: ${paragraph.style.textColor};
  font-family: ${paragraph.style.fontFamily};
}
  `));
  }

  return stylesheet.flat().join('');
};