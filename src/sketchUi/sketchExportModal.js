import { exportFormats } from "../settings";

export const sketchExportModal = () => {
  const exportModal = COSAlertWindow.new();
  exportModal.setMessageText("Design systems: select exports.");
  exportModal.setInformativeText("Each file goes to its own named folder. You need just choose main folder where all tokens goes.");
  exportModal.addButtonWithTitle("Ok");
  exportModal.addButtonWithTitle("Cancel");
  exportModal.setIcon(NSImage.alloc().initByReferencingFile(context.plugin.urlForResourceNamed("icon_128x128.png").path()));

  const viewWidth = 300;
  const viewHeight = 100;
  const view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));

  exportModal.addAccessoryView(view);
  /*
  const checkbox = NSButton.alloc().initWithFrame(NSMakeRect(0, 130, viewWidth, 22))
  checkbox.setButtonType(NSSwitchButton)
  checkbox.setBezelStyle(0)
  checkbox.setTitle("Save to file")
  checkbox.setState(NSOffState) // or NSOnState
  
  view.addSubview(checkbox)
  
  
  const checkbox2 = NSButton.alloc().initWithFrame(NSMakeRect(0, 110, viewWidth, 22))
  checkbox2.setButtonType(NSSwitchButton)
  checkbox2.setBezelStyle(0)
  checkbox2.setTitle("Create documentation")
  checkbox2.setState(NSOffState) // or NSOnState

  view.addSubview(checkbox2)
  */

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
      //saveToFile: checkbox.stringValue(),
      //createDocs: checkbox2.stringValue(),
      fileformat: exportFormats[dropdownFileFormats.indexOfSelectedItem()]
    };
  }
};
