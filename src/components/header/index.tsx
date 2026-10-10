import { AppBar, Box, Button, Toolbar, IconButton } from '@mui/material'
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

                <IconButton 
                    aria-label="Pesquisar" 
                    sx={{ 
                        padding:'10px',
                        '&:hover': {
                            backgroundColor: '#1C2420'
                    },
                 }}>
                    <SearchIcon 
                        sx={{ 
                            color: '#F1F5F2', 
                            fontSize: '30px'
                        }} 
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
