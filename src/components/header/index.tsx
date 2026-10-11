import { AppBar, Box, Button, Toolbar, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export function Header() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#101312',
                height: '100px',
                justifyContent: 'center',
                boxShadow: 'none',
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
                <h1>Price Radar</h1>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button sx={{ color: '#B6F23A',
                        '&:hover':{
                            backgroundColor: '#1C2420',
                        }
                     }}>
                        Início
                    </Button>

                    <Button sx={{ color: '#B6F23A',
                        '&:hover':{
                            backgroundColor: '#1C2420',
                        }
                     }}>
                        Favoritos
                    </Button>

                    <Button sx={{ color: '#B6F23A',
                        '&:hover':{
                            backgroundColor: '#1C2420',
                        }
                     }}>
                        Ofertas
                    </Button>
                </Box>

                <TextField
                    placeholder="Pesquisar produtos..."
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton sx={{ transition: 'background-color 0.6s ease',
                                        '&:active': {
                                            backgroundColor: '#B6F23A'
                                    }}}>
                                         <SearchIcon sx={{ color: '#B6F23A' }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{
                        width: '300px',
                        '& .MuiOutlinedInput-root': {
                            color: '#F1F5F2',
                            backgroundColor: '#1C2420',
                        '& fieldset': {
                            borderColor: '#38443D',
                        },
                        '&:hover fieldset': {
                            borderColor: '#B6F23A',
                        },  
                        '&.Mui-focused fieldset': {
                            borderColor: '#B6F23A',
                        },
                    },
                    '& input::placeholder': {
                        color: '#A0AAA3',
                        opacity: 1,
                    },
                }}
            />
            </Toolbar>
        </AppBar>
    )
}
