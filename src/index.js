import { app, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import { enableLiveReload } from 'electron-compile'

require('./renderer-events')

let mainWindow

const createWindow = async () => {
  mainWindow = new BrowserWindow({ fullscreen: true })
  mainWindow.setFullScreen(true)
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
