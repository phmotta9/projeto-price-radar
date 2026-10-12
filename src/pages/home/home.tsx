import { ProductCard } from '../../components/productCard'
import { Box, Card, Typography, Button } from '@mui/material'

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
                <Card sx={{ flex: 1, p: '16px', borderRadius: '12px' }}>
                    <Typography>Produtos monitorados</Typography>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, my: 1 }}>12</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>Na sua lista</Typography>
                </Card>

                <Card sx={{ flex: 1, p: '16px', borderRadius: '12px' }}>
                    <Typography>Economia potencial</Typography>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, my: 1, color: 'success.main' }}>R$ 245</Typography>
                    <Typography sx={{ fontSize: 13, color: 'success.main' }}>Oportunidades encontradas</Typography>
                </Card>
            </Box>
            <ProductCard />
        </Box>
    )
}