import { tokensPage /* Add here your artboard name, layer name and layergroup if you have it */ } from "../settings";
/** Access the selected Document */
const sketchDomSelected = require("sketch/dom").getSelectedDocument();
const [tokenPage] = sketchDomSelected.pages.filter(page => page.name.includes(tokensPage));
/** If loadadh needed */
import { } from "lodash";
