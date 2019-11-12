// import getHeadingFonts from './getSketchData/getHeadingFonts';
// import getParagraphFonts from './getSketchData/getParagraphFonts';
import getColorFills from "./getSketchData/getColorFills";
import fs from "@skpm/fs";
import path from "@skpm/path";

const createDocs = async () => {
  //console.log('getColorFills', getColorFills) get all the color objects 👍🏻

  // console.log('json', json);
  // await fs.writeFileSync(pluginPath, json, 'utf8');

  const jsonData = {};
  const arrayToObject = array =>
    array.reduce((obj, item) => {
      obj[item.name] = item.color;
      return obj;
    }, {});

  jsonData.colors = arrayToObject(getColorFills);

  const json = JSON.stringify(jsonData);
  console.log(json);
  const pluginPath = path.resolve();
};

export default createDocs;
