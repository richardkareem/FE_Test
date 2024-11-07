
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider as ThemeMui } from '@mui/material'
import { theme } from '@/libs/muiThemeOptions'


function ThemeProvider({children}) {
  return (
    // <ThemeMui theme={theme}>
      <Provider store={store}>
          {children}
      </Provider>
    // </ThemeMui>

  )
}

export default ThemeProvider