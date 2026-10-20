import { Box, Card, CardContent, Typography, alpha } from '@mui/material';
import { TrendingDown, TrendingUp, CameraAltOutlined } from '@mui/icons-material';
import type { Product } from '../features/products/types';
import { calcVariation } from '../utils/calcVariation';
import { useState } from 'react';

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const variation = calcVariation(product.currentPrice, product.previousPrice)
  const isDrop = variation !== null && variation < 0;

  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Card
      sx={(theme) => ({
        p: '16px',
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        minHeight: 140,
      })}
    >

     <Box
      sx={(theme) => ({
        width: 100,
        height: 100,
        flexShrink: 0,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        color: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      {product.imgUrl && !imgFailed ? (
        <Box
          component="img"
          src={product.imgUrl}
          alt={product.name}
          onError={() => setImgFailed(true)}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <CameraAltOutlined />
      )}
    </Box>

      <CardContent>
        <Typography variant='h6' component='h3' sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>

        <Typography variant='h6' component='p' sx={{ color: 'text.secondary', fontWeight: 700, mt: 0.5 }}>
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
