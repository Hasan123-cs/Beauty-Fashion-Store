import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function AboutSection() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Image Left */}
            <Grid item xs={12} md={6} style={{ marginRight: "40px" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                alt="Fashion store"
                sx={{
                  width: "100%",
                  height: 450,
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
            </Grid>

            {/* Text Right */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                About Our Store
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                We believe fashion is more than clothing. It is a way to express
                your personality and confidence. Our mission is to provide high
                quality products with modern designs.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                From everyday essentials to premium collections, we carefully
                select every item to bring you the best shopping experience.
              </Typography>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 3,
                  px: 4,
                }}
              >
                Learn More
              </Button>
            </Grid>
          </div>
        </Grid>
      </Box>
    </Container>
  );
}
