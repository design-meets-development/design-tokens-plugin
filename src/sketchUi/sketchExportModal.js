import { exportFormats } from "../settings";

export const sketchExportModal = () => {
  const exportModal = COSAlertWindow.new();
  exportModal.setMessageText("Design systems: select exports.");
  exportModal.setInformativeText("Each file goes to its own named folder.\r\nYou need just choose main folder where all tokens goes.");
  exportModal.addButtonWithTitle("Ok");
  exportModal.addButtonWithTitle("Cancel");
  exportModal.setIcon(NSImage.alloc().initByReferencingFile(context.plugin.urlForResourceNamed("icon_128x128.png").path()));

  const viewWidth = 300;
  const viewHeight = 100;
  const view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));

  exportModal.addAccessoryView(view);

  const dropdownFileFormatsTextLabel = NSTextField.alloc().initWithFrame(NSMakeRect(0, 80, viewWidth, 22));

  dropdownFileFormatsTextLabel.setStringValue("Select format");
  dropdownFileFormatsTextLabel.editable = false;
  dropdownFileFormatsTextLabel.selectable = false;
  dropdownFileFormatsTextLabel.bezeled = false;
  dropdownFileFormatsTextLabel.drawsBackground = false;

  const dropdownFileFormats = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 50, viewWidth / 2, 22));

  exportFormats.map(format => dropdownFileFormats.addItemWithTitle(format));

  view.addSubview(dropdownFileFormatsTextLabel);
  view.addSubview(dropdownFileFormats);

  const resultExportModal = exportModal.runModal();
  if (resultExportModal === 1000) {
    return {
      fileformat: exportFormats[dropdownFileFormats.indexOfSelectedItem()]
    };
  }
};
