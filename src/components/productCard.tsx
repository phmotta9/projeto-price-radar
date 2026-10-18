import { Box, Card, CardContent, Typography, alpha } from '@mui/material';
import { TrendingDown, TrendingUp, CameraAltOutlined } from '@mui/icons-material';
import type { Product } from '../features/products/types';
import { calcVariation } from '../utils/calcVariation';

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const variation = calcVariation(product.currentPrice, product.previousPrice)
  const isDrop = variation !== null && variation < 0;

  return (
    <Card
      sx={(theme) => ({
        p: '16px',
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        height: 140,
      })}
    >
      <Box
        sx={(theme) => ({
          width: 100,
          height: 100,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <CameraAltOutlined />
      </Box>

      <CardContent>
        <Typography variant='h6' component='h3' sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>

        <Typography variant='h6' component='p' sx={{ fontWeight: 700, mt: 0.5 }}>
          {product.currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </Typography>

        {variation !== null && variation !== 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              mt: 0.5,
              color: 'success.main',
            }}
          >
            {isDrop ? <TrendingDown /> : <TrendingUp />}
            <Typography variant='body2'>
              {Math.abs(variation).toFixed(0)}% {isDrop ? 'abaixo' : 'acima'} do preço anterior
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
