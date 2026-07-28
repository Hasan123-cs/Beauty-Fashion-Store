import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} maxWidth={500}>
          <Typography
            sx={{
              color: "white",
              letterSpacing: 4,
            }}
          >
            AUTUMN / WINTER 2026
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: 300,
            }}
          >
            New Season,
            <br />
            New You
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: 20,
            }}
          >
            Discover our newest collection curated for the modern woman.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">
              Shop Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
              }}
            >
              Our Story
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
