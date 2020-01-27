import { map } from "lodash";
import { tokensPage, colorGroupName, colorLayerName } from "../settings";
const sketchDomSelected = require("sketch/dom").getSelectedDocument();
const [tokenPage] = sketchDomSelected.pages.filter(page => page.name.includes(tokensPage));

let getColorFills;

function hexToRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16),
      a = parseInt(hex.slice(7, 9), 16) / 255;

  return "rgba(" + r + ", " + g + ", " + b + ", " + (a * 100)  + "%)";
}

if (tokenPage) {
  const [{ layers }] = tokenPage.layers;
  const colorGroups = layers.filter(layer => layer.name.includes(colorGroupName));
  const groupLayers = map(colorGroups, "layers")
    .flat()
    .filter(item => item.name.includes(colorLayerName));
  getColorFills = groupLayers.map(({ name, sharedStyleId }) => {
    const rgba = hexToRGB(sketchDomSelected.getSharedLayerStyleWithID(sharedStyleId).style.fills.map(fill => fill.color)[0]);
    return {
      name: name.split("/")[1],
      color: sketchDomSelected.getSharedLayerStyleWithID(sharedStyleId).style.fills.map(fill => fill.color)[0],
      rgba: rgba,
      sharedStyle: sketchDomSelected.getSharedLayerStyleWithID(sharedStyleId),
      tokenType: "color"
    };
  });
}
export default getColorFills;
