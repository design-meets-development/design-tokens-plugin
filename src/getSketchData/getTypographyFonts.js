import { map } from "lodash";
import { tokensPage, typographyGroupName, typographyLayerName } from "../settings";
const sketchDomSelected = require("sketch/dom").getSelectedDocument();
const [tokenPage] = sketchDomSelected.pages.filter(page => page.name.includes(tokensPage));

let getTypographyValues;

if (tokenPage) {
  const [{ layers }] = tokenPage.layers;
  const typographyGroups = layers.filter(layer => layer.name.includes(typographyGroupName));

  const groupLayers = map(typographyGroups, "layers")
        .flat()
        .filter(item => item.name.includes(typographyLayerName));
  
  getTypographyValues = groupLayers.map(({ name, sharedStyleId }) => {
    return{
      name: name.split("/")[1],
      lineHeight: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.lineHeight,
      fontSize: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.fontSize,
      fontFamily: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.fontFamily,
      paragraphSpacing: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.paragraphSpacing,
      fontWeight: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.fontWeight,
      alignment: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.alignment,
      letterSpacing: sketchDomSelected.getSharedTextStyleWithID(sharedStyleId).style.kerning,
      tokenType: "typography"
    }
  });

}

export default getTypographyValues;