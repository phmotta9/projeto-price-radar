import { Box, Card, Typography } from "@mui/material"

export function Home() {
    return (
        <Box sx={{
            backgroundColor: '#101312',
            color: '#f1f5f2',
            padding: '20px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}>
    
            <Box>
                <Typography variant="h5" sx={{ color: '#f1f5f2', fontWeight: 700, mt: 0.5 }}>
                    Seus produtos
                </Typography>
                <Typography sx={{ color: '#a0aaa3', fontSize: 15, mt: 0.5 }}>
                    Acompanhe preços e encontre boas oportunidades.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: '16px' }}>
                <Card sx={{ flex: 1, p: '16px', backgroundColor: '#1c2420', color: '#f1f5f2', borderRadius: '12px' }}>
                    <Typography sx={{ color: '#f1f5f2' }}>Produtos monitorados</Typography>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, my: 1 }}>12</Typography>
                    <Typography sx={{ color: '#a0aaa3', fontSize: 13 }}>Na sua lista</Typography>
                </Card>

                <Card sx={{ flex: 1, p: '16px', backgroundColor: '#1C2420', color: '#f1f5f2', borderRadius: '12px' }}>
                    <Typography sx={{ color: '#f1f5f2' }}>Economia potencial</Typography>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, my: 1, color: '#72d6a0' }}>R$ 245</Typography>
                    <Typography sx={{ color: '#72d6a0', fontSize: 13 }}>Oportunidades encontradas</Typography>
                </Card>
            </Box>
        </Box>
    )
}