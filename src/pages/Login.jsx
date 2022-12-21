import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaLock } from 'react-icons/fa';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://ams-class-app.vercel.app/">
                ams
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
function Login() {
    const [name, setName] = React.useState("");
    const [id, setId] = React.useState(null);
    const navigate = useNavigate();
    const user = localStorage.getItem("name");

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("id", id);
        navigate("/home")
    }


    React.useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user, navigate])

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <FaLock />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Student LOGIN
                    </Typography>
                    <Alert severity={'error'}>
                        <AlertTitle>Note: </AlertTitle>
                        <strong>Login is done only once</strong>
                    </Alert>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Student Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Student ID"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default Login