import { ProductCard } from '../../components/ProductCard'
import { Box, Typography, Button } from '@mui/material'
import { StatCard } from '../../components/StatCard'

export function Home() {
    return (
        <Box sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}>
    
            <Box>
                <Typography variant="h4" component="h2" sx={{ mt: 0.5 }}>
                    Seus produtos
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 15, mt: 0.5 }}>
                    Acompanhe preços e encontre boas oportunidades.
                </Typography>

                <Button variant="contained" 
                sx={{
                    padding: '5px 10px',
                    mt: 2,
                }}>
                    Cadastrar novo produto
                </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: '16px' }}>
                <StatCard title='Produtos monitorados' value={12} caption='Na sua lista' />
                <StatCard title='Economia potencial' value='R$ 245' caption='Oportunidades encontradas' positive />
            </Box>

            <ProductCard />

        </Box>
    )
}