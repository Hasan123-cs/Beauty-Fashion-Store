import { Container, Typography, Grid } from "@mui/material";

import CategoryCard from "./CategoryCard";

export default function Categories() {
  // Temporary data
  const categories = [
    {
      id: 1,
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
    {
      id: 2,
      name: "Jackets",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      id: 3,
      name: "Knitwear",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      id: 4,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" fontWeight={600} gutterBottom>
        Shop by Category
      </Typography>

      <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
        Discover styles curated for every occasion.
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
