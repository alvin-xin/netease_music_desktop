const path = require("path");
const { app, BrowserWindow } = require("electron");
// const isDevEnv = require("electron-is-dev");

function createWindow () {
  // 创建浏览器窗口
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  // const startDevelopmentUrl = 'http://localhost:3000';
  const startProductionUrl = `file://${path.join(__dirname, './builder/index.html')}`;
  // const urlLocation = isDevEnv ? startDevelopmentUrl : startProductionUrl;
  mainWindow.loadURL(startProductionUrl);

  // 打开开发者工具
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});

// In this file you can include the rest of your count's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。
