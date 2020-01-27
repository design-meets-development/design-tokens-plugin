import { map, concat } from "lodash";
import { tokensPage, utilisGroupName, utilisLayerName, utilisAll } from "../settings";

const sketchDomSelected = require("sketch/dom").getSelectedDocument();
const [tokenPage] = sketchDomSelected.pages.filter(page => page.name.includes(tokensPage));

let getUtilsSpace;
let getUtilsRadius;
let getUtilsShadow;
let getUtilsBorder;

if (tokenPage) {
  const [{ layers }] = tokenPage.layers;
  const utilisGroups = layers.filter(layer => layer.name.includes(utilisGroupName));

  const groupLayers = map(utilisGroups, "layers")
    .flat()
    .filter(item => item.name.includes(utilisLayerName));

  const spacerToken = groupLayers.filter(item => item.name.includes(utilisAll[0]));
  getUtilsSpace = map(spacerToken, value => {
    return {
      name: value.name.split("/")[1] + "-" + value.name.split("/")[2],
      height: value.frame.height
    };
  });

  const radiusToken = groupLayers.filter(item => item.name.includes(utilisAll[1]));
  getUtilsRadius = map(radiusToken, value => {
    return {
      name: value.name.split("/")[1] + "-" + value.name.split("/")[2],
      radius: map(value.points, value => {
        return value.cornerRadius;
      })
    };
  });

  const shadowToken = groupLayers.filter(item => item.name.includes(utilisAll[2]));
  getUtilsShadow = shadowToken.map(({ name, sharedStyleId }) => {
    return {
      name: name.split("/")[1] + "-" + name.split("/")[2],
      shadowItem: sketchDomSelected.getSharedLayerStyleWithID(sharedStyleId).style.shadows
    };
  });

  const borderToken = groupLayers.filter(item => item.name.includes(utilisAll[3]));
  getUtilsBorder = borderToken.map(({ name, sharedStyleId }) => {
    return{
      name: name.split("/")[1] + "-" + name.split("/")[2],
      border: sketchDomSelected.getSharedLayerStyleWithID(sharedStyleId).style.borders[0].thickness
    };
  });
}

const getUtilis = concat(getUtilsSpace, getUtilsRadius, getUtilsShadow, getUtilsBorder);

export default getUtilis;
