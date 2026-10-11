import { useState } from "react"
import { ProductCard } from "../../components/productCard"
import { ProductForm } from "../../components/productForm"
import { Box, Card, Typography, Button, Dialog } from "@mui/material"

export function Home() {
    const [newProd, setNewProd] = useState(false)

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

                <Button variant="contained" onClick={() => setNewProd(true)} 
                sx={{
                    backgroundColor: '#b6f13a',
                    color: '#101312',
                    textTransform: 'none',
                    borderRadius: '12px',
                    padding: '5px 10px',
                    mt: 2,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#9DD42F',
                    },
                }}>
                    Cadastrar novo produto
                </Button>
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
            <ProductCard />

            <Dialog
                open={newProd}
                onClose={() => setNewProd(false)}
                fullWidth
                maxWidth="sm"
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "transparent",
                            backgroundImage: "none",
                            boxShadow: "none",
                        },
                    },
                }}
            >
                <ProductForm />
            </Dialog>
        </Box>
    )
}