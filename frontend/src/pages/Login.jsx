import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, blue } from '@mui/material/colors';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import useAuth from '../hooks/useAuth';
import usePersist from '../hooks/usePersist';


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, getNewAuth } = useAuth();
  const { persist, setPersist } = usePersist();

  const [infos, setInfos] = useState({
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!infos.username) {
      return setErrorMsg({username: 'Username cannot be empty.'});
    }
    if (!infos.password) {
      return setErrorMsg({password: 'Password cannot be empty.'});
    }
    try {
      await getNewAuth(infos.username, infos.password);
      navigate(location.state?.from? location.state.from: '/');
    } catch (err) {
      if (err?.response?.data?.message === "Either username or password did not match.") {
        setErrorMsg({password: "Username and password did not match."});
      }
    }
  };

  const handleUsernameChange = e => {
    setInfos({...infos, username: e.target.value});
    setErrorMsg({});
  }
  const handlePasswordChange = e => {
    setInfos({...infos, password: e.target.value});
    setErrorMsg({});
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              error={!!errorMsg.username}
              helperText={errorMsg.username}
              value={infos.username}
              onChange={handleUsernameChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errorMsg.password}
              helperText={errorMsg.password}
              value={infos.password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox checked={persist} onChange={() => setPersist((p) => !p)}/>}
              label="Stay signed in."
              labelPlacement="end"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign up here."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


