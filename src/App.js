import React from 'react';
import logo from './logo.svg';
import './App.css';
import { buildState } from './domain/aggregate';
import { Questions } from './domain/questions';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/styles';
import { Demo } from './Demo';

export const primary = '#31366f';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const questions = Questions(buildState());

  console.log(questions.whatFieldsDoesAnObjectHave('root'));

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Demo />
      </ThemeProvider>
    </>
  );
}

export default App;
