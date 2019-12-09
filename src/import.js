import sketchDom from "sketch/dom";
import UI from "sketch/ui";
const sketch = require('sketch');
import { fromNative } from 'sketch';
var document = require('sketch/dom').getSelectedDocument()
const sharedStyle = require('sketch/dom').SharedStyle

const designSystemImport= () => {
    
    let files = null;
    const openPanel = NSOpenPanel.openPanel();
    openPanel.setCanChooseFiles(true)
    openPanel.setCanChooseDirectories(true)
    openPanel.setAllowsMultipleSelection(true)
    openPanel.setAllowedFileTypes(["json"])
    openPanel.runModal()
    files = openPanel.URL()
    const fileContents = NSString.stringWithContentsOfFile(files);
    const paletteContents = JSON.parse(fileContents);


    let updatedStyle = document.getSharedLayerStyleWithID('2C628818-35A7-4A43-8556-284DB553383A')
    let myLocalLayerStyle = document.getLayersNamed('color/primary')

    let myJSONLayerStyle = paletteContents
    
    const JSONcolor = myJSONLayerStyle.color.primary.value

    console.log(myLocalLayerStyle[0].style.fills[0].color = JSONcolor);
    console.log(updatedStyle.style.fills[0].color = JSONcolor);
    document.sketchObject.reloadInspector();

    /*
    console.log(updatedStyle.style.fills[0].color = "#FFF000");
    document.sketchObject.reloadInspector();
    */



    /*
    let updatedStyle = document.getSharedLayerStyleWithID('2C628818-35A7-4A43-8556-284DB553383A')
    let updatedColor = updatedStyle.style.fills[0].color;
    
    let myJSONLayerStyle = paletteContents
    
    updatedColor = "#FF0000"

    document.sketchObject.reloadInspector();
*/



    //let shared = document.getSharedLayerStyleWithID('2C628818-35A7-4A43-8556-284DB553383A')
    
    /*
    let myLocalLayerStyle = document.sharedLayerStyles.find(layerStyle => layerStyle.name == "color/primary")

    localImport.sharedStyle = myLocalLayerStyle

    console.log(localImport.sharedStyle)
    
    let myJSONLayerStyle = paletteContents
    
    fileImport.sharedStyle = myJSONLayerStyle.color.primary.value

    console.log(fileImport.sharedStyle)

    */
    /*

    console.log(selection)

    selection.sharedStyle = myLayerStyle

    selection.style.syncWithSharedStyle(selection.sharedStyle)

    document.sketchObject.reloadInspector();

    console.log(myLayerStyle)
    */

    //console.log(paletteContents);
    //console.log(document.sharedLayerStyles);
    //console.log(primary);
  
    
    
    /*
    document.sharedLayerStyles.push({
        name: 'color/primary',
        style: { fills: ['#FF000'] },
      })
      */

   /*
    var fileTypes = [];
    
    var contextApi = context.api();
    var languageFile = null;
    var languageData = null;
    
    var openPanel = NSOpenPanel.openPanel();
    openPanel.setCanChooseFiles(true)
    openPanel.setCanChooseDirectories(true)
    openPanel.setAllowsMultipleSelection(true)
    openPanel.setAllowedFileTypes(["json"])
    
    var filePath = openPanel.URLs();
    openPanelButtonPressed = openPanel.runModal()
    
    if (openPanelButtonPressed == NSFileHandlingPanelOKButton) {
        languageFile = openPanel.URL()
    } else {
        sketch.UI.message('Cancelled')
    }
    */
   
};

export default designSystemImport;
