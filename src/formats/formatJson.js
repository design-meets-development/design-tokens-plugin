import {tokensPage} from "../settings";
import getColorFills from '../getSketchData/getColorFills';
import getTypography from '../getSketchData/getTypographyFonts';
import getSvgPaths from '../getSketchData/getSvgPaths';
import getUtils from '../getSketchData/getUtils';

const sketchDomSelected = require("sketch/dom").getSelectedDocument();
const [tokenPage] = sketchDomSelected.pages.filter(page => page.name.includes(tokensPage));

const fromPairs = (pairs, dest={}) => {
    pairs.forEach(([key, value]) => {
        dest[key] = value;
    });
    return dest;
};

const jsonData = {};

export const color = () => {
    if (tokenPage) {
        const arrayToObject = (array) =>
            array.reduce((obj, item) => ({
                ...obj, [item.name]: {
                    "value": item.color.slice(0, -2),
                    "type": "color"
                }
            }), {})
        // Gives the name of the category
        jsonData.color = arrayToObject(getColorFills);
    }

    const rawData = fromPairs(Object.entries(jsonData.color));
    const colorData = JSON.stringify({ color: rawData }, null, 4);
    return colorData;
}


export const typography = () => {
    if (tokenPage) {
        const arrayToObject = (array) =>
            array.reduce((obj, item) => ({
                ...obj, [item.name]: {
                    "font-family": { "value": item.fontFamily },
                    "font-size": { "value": item.fontSize },
                    "weight": { "value": item.weight },
                    "letter-spacing": { "value": item.letterSpacing },
                    "line-height": { "value": item.lineHeight },
                    "type": item.tokenType 
                }
            }), {})
        // Gives the name of the category
        jsonData.typography = arrayToObject(getTypography);
        const rawData = fromPairs(Object.entries(jsonData.typography));
        const typographyData = JSON.stringify({ typography: rawData }, null, 4);
        return typographyData;
    }
}

export const icons = () => {
    if (tokenPage) {
        const arrayToObject = (array) =>
            array.reduce((obj, item) => ({
                ...obj, [item.name]: {
                    "value": item.svgCodeSting,
                    "type": "icon"
                }

            }), {})
        // Gives the name of the category
        jsonData.svg = arrayToObject(getSvgPaths);
        const rawData = fromPairs(Object.entries(jsonData.svg));
        const iconsData = JSON.stringify({ icon: rawData }, null, 4);
        return iconsData;
    }
}

export const utils = () => {
        const arrayToObject = (array) =>
            array.reduce((obj, item) => ({
                ...obj, [item.name]: {
                    "spacer": (item.height ? item.height : undefined),
                    "radius": (item.radius ? item.radius : undefined),
                    "shadows": (item.shadowItem ? [item.shadowItem] : undefined),
                    /*
                    "shadow": (item.shadow ? {
                        color: (item.shadowColor ? item.shadowColor : undefined),
                        x: (item.shadowX ? item.shadowX : undefined),
                        y: (item.shadowY ? item.shadowY : undefined),
                        blur: (item.shadowBlur ? item.shadowBlur : undefined),
                        spread: (item.shadowSpread ? item.shadowSpread : undefined),
                    }: undefined),
                    */

                    "type": "utils"
                }
            }), {})
        // Gives the name of the category
        
        jsonData.utils = arrayToObject(getUtils);
        const rawData = fromPairs(Object.entries(jsonData.utils));
        const utilsData = JSON.stringify({ utils: rawData }, null, 4);
        return utilsData;
}



