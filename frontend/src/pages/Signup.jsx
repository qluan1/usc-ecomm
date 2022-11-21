import { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { green, blue } from '@mui/material/colors';
import { register } from '../apis/register';
import useAuth from '../hooks/useAuth';




export default function Signup() {
  const navigate = useNavigate();
  const { getNewAuth } = useAuth();
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    confirm: '',
  });
  const [errorMsg, setErrorMsg] = useState({
    username: null,
    password: null,
    confirm: null,
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

  const handleUsernameChange = (e) => {
    setErrorMsg({...errorMsg, username:null});
    setFormState((s) => ({...s, username: e.target.value}))
  }
  const handlePasswordChange = (e) => {
    setFormState((s) => ({...s, password: e.target.value}))
    setErrorMsg({
      ...errorMsg,
      password:null,
      confirm: (!!(e.target.value && e.target.value !== formState.confirm))
        ?'Passwords do not match.'
        :null
    });
  }
  const handleConfirmChange = (e) => {
    setFormState((s) => ({...s, confirm: e.target.value}));
    setErrorMsg({
      ...errorMsg,
      confirm: (!!(formState.password && formState.password !== e.target.value))
        ?'Passwords do not match.'
        :null
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.username) {
      return setErrorMsg({...errorMsg, username: 'Username can not be empty'});
    }
    if (!formState.password) {
      return setErrorMsg({...errorMsg, password: 'Password can not be empty'});
    }
    if (formState.password !== formState.confirm) {
      return setErrorMsg({...errorMsg, confirm: 'Passwords do not match.'})
    }
    const newUser = {username: formState.username, password: formState.password};
    try {
      await register(newUser.username, newUser.password);
      await getNewAuth(newUser.username, newUser.password);
      navigate('/');
    } catch (err) {
      if (err.response?.data?.message === `Username ${newUser.username} already exists!`) {
        setFormState({...formState, password: '', confirm: ''});
        return setErrorMsg({username: 'Username already exists', password: '', confirm: ''})
      }
    }
  }

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

          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
              value={formState.username}
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
              value={formState.password}
              onChange={handlePasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirm"
              value={formState.confirm}
              onChange={handleConfirmChange}
              error={!!errorMsg.confirm}
              helperText={errorMsg.confirm}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}