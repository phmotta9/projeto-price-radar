import { Box, Card, CardContent, Typography } from "@mui/material";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export function ProductCard() {
  return (
    <Card
      sx={{
        p: "16px",
        backgroundColor: "#1C2420",
        color: "#f1f5f2",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column", 
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: "8px",
            backgroundColor: "#2a3320",
            color: "#b6f13a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HeadphonesOutlinedIcon />
        </Box>

        <CardContent
          sx={{ flex: 1, minWidth: 0, p: 0, "&:last-child": { pb: 0 } }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Fone Bluetooth
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: 700, mt: 0.5 }}
          >
            R$ 299,90
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 0.5,
              color: "#72d6a0",
            }}
          >
            <TrendingDownIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2" sx={{ color: "inherit" }}>
              15% abaixo do preço anterior
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}