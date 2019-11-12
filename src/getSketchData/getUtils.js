import { mainSketchFile, tokensPage, utilisGroupName, utilisLayerName, utilisAll } from "../settings";
import _ from "lodash";

const sketchDom = require("sketch/dom").getDocuments();
const sketchDomSelected = require("sketch/dom").getSelectedDocument();
const [mainDocument] = sketchDom.filter(file => file.path.includes(mainSketchFile));
const [tokenPage] = mainDocument.pages.filter(page => page.name.includes(tokensPage));

let getUtilsSpace;
let getUtilsBorder;
let getUtilsShadow;

if (tokenPage) {
  const [{ layers }] = tokenPage.layers;
  const utilisGroups = layers.filter(layer => layer.name.includes(utilisGroupName));

  const groupLayers = _.map(utilisGroups, "layers")
    .flat()
    .filter(item => item.name.includes(utilisLayerName));

  const spacerToken = groupLayers.filter(item => item.name.includes(utilisAll[0]));
  getUtilsSpace = _.map(spacerToken, value => {
    return {
      name: value.name.split("/")[1] + "-" + value.name.split("/")[2],
      height: value.frame.height
    };
  });

  const radiusToken = groupLayers.filter(item => item.name.includes(utilisAll[1]));
  getUtilsBorder = _.map(radiusToken, value => {
    return {
      name: value.name.split("/")[1] + "-" + value.name.split("/")[2],
      radius: _.map(value.points, value => {
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
}

const getUtilis = _.concat(getUtilsSpace, getUtilsBorder, getUtilsShadow);

export default getUtilis;
