import sketchDom from'sketch/dom';
import UI from 'sketch/ui';
import { sketchExportModal } from './sketchUi/sketchExportModal';
import { saveFileModal } from './sketchUi/saveFileModal';


const designSystemExport = () => {  
  // Check here if even one file is found and something can be exported
  sketchDom.getSelectedDocument().pages[0].name;
  if (sketchDom.getSelectedDocument().pages[0].name === 'design-tokens') {
    const userExportOptions = sketchExportModal();
    saveFileModal(userExportOptions.fileformat);
  } else {
    UI.alert('Error 🛑', 'No tokens page found!\r\nMake sure that page name is "design-tokens"!')
  }
  
};

export default designSystemExport;