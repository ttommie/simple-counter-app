import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";

const themeOptions = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    type: 'light',
    primary: {
      dark: '#352a7a',
      main: '#4e3b95',
      light: '#6248a5',
    },
    secondary: {
      dark: '#7a2f73',
      main: '#953b82',
      light: '#9956ab',
    }
  }
})

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userValue = e.target.value

    if(!!userValue) {
      setMultiplier(1);
    }
    
    if (userValue <= 0) {
      setMultiplier(1);
    } else {
      setMultiplier(userValue);
    }

  }

  if (count < 0) {
    setCount(0);
  }

  return (
    <ThemeProvider theme={themeOptions}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        margin="0"
        padding="0"
        textAlign="center"
      >
        <div>
        <Typography variant="h3" style={{fontWeight: "800"}} color="primary" mb="4px">Tommies Simple Counter</Typography>
        <Typography variant="h4" color="secondary">Count: {count}</Typography>
        <Typography variant="body1" color="primary" mb="10px">Multiplier: {multiplier}</Typography>
          <TextField 
            InputLabelProps={{shrink: true}} 
            type="number" 
            onChange={(e) => handleSubmit(e)} 
            label="Multiplier" 
            variant="outlined" 
            size="small"
          />
        <ButtonGroup sx={{height: '40px', marginLeft: '5px'}}>
          <Button onClick={() => setCount(count + parseInt(multiplier))} color="primary" variant="outlined">+</Button>
          <Button onClick={() => setCount(count - multiplier)} color="primary" variant="outlined">-</Button>
        </ButtonGroup>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
