const { workspace } = require('vscode');
const { showErrorMessage } = require('./utils/message');

const config = () => {
  return workspace.getConfiguration('emulator');
};

exports.emulatorPath = () => {
  const path = config().get('emulatorPath');
  if (process.platform.startsWith('win') && path.includes('/')) {
    showErrorMessage(
      `Make sure your Windows path is set correctly! Example: C:\\Users\\Me\\AppData\\Local\\Android\\Sdk\\emulator`
    );
    return false;
  } else {
    return path;
  }
};
