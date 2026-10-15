import { Box, Card, CardContent, Typography } from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
import { TrendingDown, TrendingUp, } from "@mui/icons-material";
import type { ProductsProps } from "../features/products/types";

export function ProductCard(product: ProductsProps) {

  function calcVariation({ currentPrice, previousPrice }: ProductsProps) {
    if (currentPrice > previousPrice) {
      const percentual = ((currentPrice - previousPrice) / previousPrice * 100)
      return (
        <>
        <TrendingUp sx={{ color: 'success.main' }} />
        <Typography variant="body2" sx={{ color: 'success.main' }}>
          {percentual.toFixed(0)}% acima que o preço anterior
        </Typography>
        </>
      )
    } else if (currentPrice < previousPrice) {
      const percentual = ((previousPrice - currentPrice) / previousPrice * 100)
      return (
        <>
        <TrendingDown sx={{ color: 'success.main' }}/>
        <Typography variant="body2" sx={{ color: 'success.main' }}>
          {percentual.toFixed(0)}% abaixo do preço anterior
        </Typography>
        </>
      )
    }
  }

  const result = calcVariation(product)

  return (
    <Card
      sx={(theme) => ({
        p: '16px',
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        gap: "10px",
        alignItems: 'center'
      })}
    >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "8px",
            backgroundColor: "#2a3320",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CameraAltOutlined/>
        </Box>

        <CardContent>
          <Typography variant="h6" component='h3' sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>

          <Typography variant="h6" component="p" sx={{ fontWeight: 700, mt: 0.5 }}>
            {product.currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 0.5,
            }}
          >
            {result}
          </Box>

        </CardContent>

    </Card>
  );
}