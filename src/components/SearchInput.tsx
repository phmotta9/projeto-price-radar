import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export function SearchInput() {
    return (
        <TextField
            placeholder='Pesquisar produtos...'
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position='start'>
                            <IconButton sx={{
                                transition: 'background-color 0.6s ease',
                                '&:active': {
                                    backgroundColor: 'primary.main'
                                }
                            }}>
                                <SearchIcon sx={{ color: 'primary.main' }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                width: '300px',
                '& .MuiOutlinedInput-root': {
                    color: 'text.primary',
                    backgroundColor: 'background.paper',
                    '& fieldset': {
                        borderColor: 'divider',
                    },
                    '&:hover fieldset': {
                        borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                    },
                },
                '& input::placeholder': {
                    color: 'text.secondary',
                    opacity: 1,
                },
            }}
        />
    )
}
