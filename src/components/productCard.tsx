import { Box, Card, CardContent, Typography } from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import type { ProductsProps } from "../features/products/types";

export function ProductCard(product: ProductsProps) {

  function calcVariation({ currentPrice, previousPrice }: ProductsProps) {
    if (currentPrice > previousPrice) {
      const response = ((currentPrice - previousPrice) / previousPrice * 100)
      
    }

  }

  return (
    <Card
      sx={(theme) => ({
        p: '16px',
        backgroundColor: 'background.paper',
        color: 'text-primary',
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
          <Typography variant="h6" component='h1' sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>

          <Typography variant="h6" component="p" sx={{ fontWeight: 700, mt: 0.5 }}>
            {product.currentPrice}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 0.5,
              color: "success.main",
            }}
          >
            <TrendingDownIcon sx={{ fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: "inherit" }}>
              15% abaixo do preço anterior
            </Typography>

          </Box>

        </CardContent>

    </Card>
  );
}