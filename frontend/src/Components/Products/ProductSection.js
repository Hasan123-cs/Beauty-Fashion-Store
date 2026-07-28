import { Container, Typography, Grid } from "@mui/material";

import ProductCard from "./ProductCard";

export default function ProductSection({ title, products }) {
  const dummyProducts = [
    {
      id: 1,
      name: "Elegant Black Dress",
      brand: "Zara",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      price: 120,
      discountPrice: 89,
      rating: 4.8,
      reviewCount: 45,
    },
    {
      id: 2,
      name: "Classic Beige Coat",
      brand: "H&M",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      price: 140,
      discountPrice: null,
      rating: 4.5,
      reviewCount: 31,
    },
    {
      id: 3,
      name: "Modern Knit Sweater",
      brand: "Mango",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      price: 95,
      discountPrice: 75,
      rating: 4.7,
      reviewCount: 20,
    },
    {
      id: 4,
      name: "Leather Handbag",
      brand: "Gucci",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      price: 250,
      discountPrice: null,
      rating: 5,
      reviewCount: 78,
    },
  ];

  const items = products ?? dummyProducts;

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" fontWeight={600} mb={6}>
        {title}
      </Typography>

      <Grid container spacing={4}>
        {items.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
