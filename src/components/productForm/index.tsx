import { Box, Button, Card, TextField, Typography } from "@mui/material";

export function ProductForm() {
  return (
    <Card
      sx={{
        p: "16px",
        backgroundColor: "#101312",
        border: "1px solid #303030",
        borderRadius: "12px",
        color: "#f1f5f2",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: '#f1f5f2', fontWeight: 700 }}>
          Cadastrar produto
        </Typography>
        <Typography variant="body2" sx={{ color: "#a0aaa3", mt: "12px" }}>
          Cadastre as informações do produto.
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: "#d8d8d8", mb: "8px" }}>
          Nome do produto
        </Typography>
        <TextField
          fullWidth
          placeholder="Ex.: Fone Sony WH-1000XM5"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#303030",
              color: "#e6e6e6",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#444" },
              "&:hover fieldset": { borderColor: "#666" },
              "&.Mui-focused fieldset": { borderColor: "#b6f13a" },
            },
            "& input::placeholder": { color: "#9a9a9a", opacity: 1 },
          }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: "16px" }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, color: "#d8d8d8", mb: "8px" }}>
            Preço atual (R$)
          </Typography>
          <TextField
            fullWidth
            placeholder="1.499,90"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#303030",
                color: "#e6e6e6",
                borderRadius: "8px",
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#666" },
                "&.Mui-focused fieldset": { borderColor: "#b6f13a" },
              },
              "& input::placeholder": { color: "#9a9a9a", opacity: 1 },
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, color: "#d8d8d8", mb: "8px" }}>
            Preço desejado (R$)
          </Typography>
          <TextField
            fullWidth
            placeholder="1.199,90"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#303030",
                color: "#e6e6e6",
                borderRadius: "8px",
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#666" },
                "&.Mui-focused fieldset": { borderColor: "#b6f13a" },
              },
              "& input::placeholder": { color: "#9a9a9a", opacity: 1 },
            }}
          />
        </Box>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 700, color: "#d8d8d8", mb: "8px" }}>
          URL da imagem (opcional)
        </Typography>
        <TextField
          fullWidth
          placeholder="https://..."
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#303030",
              color: "#e6e6e6",
              borderRadius: "8px",
              "& fieldset": { borderColor: "#444" },
              "&:hover fieldset": { borderColor: "#666" },
              "&.Mui-focused fieldset": { borderColor: "#b6f13a" },
            },
            "& input::placeholder": { color: "#9a9a9a", opacity: 1 },
          }}
        />
      </Box>

      <Button
        fullWidth
        sx={{
          py: "14px",
          backgroundColor: "#2a3320",
          color: "#b6f13a",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#34412a" },
        }}
      >
        Cadastrar produto
      </Button>
    </Card>
  );
}