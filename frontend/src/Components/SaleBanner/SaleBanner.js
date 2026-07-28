import { Box, Button, Container, Typography } from "@mui/material";

export default function SaleBanner() {
  return (
    <Box
      sx={{
        my: 8,
        py: 8,
        background: "linear-gradient(135deg, #111 0%, #333 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Summer Sale Up To 50% Off
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            Discover our latest fashion collections with exclusive discounts
            available for a limited time.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: "#fff",
              color: "#111",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#eee",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
