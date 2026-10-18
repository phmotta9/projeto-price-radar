import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';

export function Header() {
    return (
        <AppBar
            position='static'
            sx={{
                height: '100px',
                justifyContent: 'center',
            }}
        >
            <Toolbar
                sx={{
                    width: '90%',
                    maxWidth: '1200px',
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h1' component='h1'>
                    Price Radar
                </Typography>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button component={NavLink} to='/' end sx={{
                        '&.active': {
                            backgroundColor: 'background.paper',
                        },
                        '&:hover': {
                            backgroundColor: 'background.paper',
                        }
                    }}>
                        Início
                    </Button>

                    <Button component={NavLink} to='/favorites' sx={{
                        '&.active': {
                            backgroundColor: 'background.paper',
                        },
                        '&:hover': {
                            backgroundColor: 'background.paper',
                        }
                    }}>
                        Favoritos
                    </Button>

                    <Button component={NavLink} to='/deals' sx={{
                        '&.active': {
                            backgroundColor: 'background.paper',
                        },
                        '&:hover': {
                            backgroundColor: 'background.paper',
                        }
                    }}>
                        Ofertas
                    </Button>
                </Box>

                <SearchInput />
            </Toolbar>
        </AppBar>
    )
}
