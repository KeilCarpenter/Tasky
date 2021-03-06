const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor(options) {
        super(options);

        // Hide main window when not focused
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur(){
        this.hide();
    }
}

module.exports = MainWindow;