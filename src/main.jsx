import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './globalStyles'
import Wrapper from './components/Container/styled'
import { ThemeProvider } from 'styled-components';
import dark from './themes/dark.theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>

      <ThemeProvider theme={dark}>

        <GlobalStyle />
        <App />

      </ThemeProvider>
    </>
  </React.StrictMode>,
)
