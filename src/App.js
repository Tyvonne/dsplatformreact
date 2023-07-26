import { createTheme, ThemeProvider } from '@mui/material/styles';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DataObjectIcon from '@mui/icons-material/DataObject';

const theme = createTheme({
  palette: {

    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    Platform3DS: {
      main: '#235581',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="Platform3DS" >
          <Toolbar>
            <DataObjectIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              3DExperience
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
