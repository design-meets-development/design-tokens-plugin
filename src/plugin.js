import sketchDom from "sketch/dom";
import UI from "sketch/ui";
import { sketchExportModal } from "./sketchUi/sketchExportModal";
import { saveFileModal } from "./sketchUi/saveFileModal";
import createDocs from "./createDocs";

const designSystemExport = () => {
  // Check here if even one file is found and something can be exported
  if (sketchDom.getDocuments().length > 0) {
    const userExportOptions = sketchExportModal();
    if (userExportOptions.fileformat /*&& userExportOptions.saveToFile == '1' */) {
      saveFileModal(userExportOptions.fileformat);
    } else if (userExportOptions.createDocs == "1") {
      createDocs();
    } else {
      UI.alert("Export failed!", "Nothing selected");
    }
  }
};

export default designSystemExport;
