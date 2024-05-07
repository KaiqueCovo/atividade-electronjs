// Importando módulos do Electron
const { app, BrowserWindow } = require('electron')

// Criando uma janela
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}


// Quando o aplicativo estiver pronto, crie uma janela
app.whenReady().then(() => {
  createWindow()
})