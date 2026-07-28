import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Newsletter() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f7f7f7",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Join Our Newsletter
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mb: 4,
            }}
          >
            Subscribe to receive updates about new products, special offers, and
            exclusive discounts.
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 2,
              maxWidth: 550,
              mx: "auto",

              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
            />

            <Button
              variant="contained"
              sx={{
                px: 4,
                borderRadius: 3,
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
