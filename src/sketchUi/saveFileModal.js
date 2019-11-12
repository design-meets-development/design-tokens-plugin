import { saveContentToFile } from '../saveContentToFile';
import UI from 'sketch/ui';

const save = async (directoryPath, file) => {
  const writeFile = await saveContentToFile(directoryPath, file)
                    .catch((err) => console.log('Error saving to file', err));
  if (writeFile === 'success') {
    UI.alert(
      'Export complete. 👍🏻',
      'Tokens were successfully exported.'
    );
  } else {
    UI.alert(
      'Export failed! 🛑',
      'Something went wrong.'
    );
  }
};

export const saveFileModal = (fileFormat) => {
  const savePanel = NSSavePanel.savePanel();
  savePanel.setNameFieldStringValue('index')
  savePanel.setPrompt("Save Tokens");
  const resultSaveDialog = savePanel.runModal();

  if (resultSaveDialog == NSFileHandlingPanelOKButton) {
    const directoryPath = savePanel
      .URL()
      .path()
      .replace(fileFormat, ""); // remove file to get only directory
    try {
      save(directoryPath, fileFormat);
    } catch (err) {
      UI.alert(`Something went wrong - ${err}.`);
    }
  }
};