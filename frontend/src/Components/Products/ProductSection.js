import { Container, Typography, Grid } from "@mui/material";

import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
export default function ProductSection({ title, endpoint }) {
  //states
  const [products, setProducts] = useState([]);
  // handlers
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://localhost:7066/api/${endpoint}`);
        console.log("Response:", response);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [endpoint]);
  // const dummyProducts = [
  //   {
  //     id: 1,
  //     name: "Elegant Black Dress",
  //     brand: "Zara",
  //     image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  //     price: 120,
  //     discountPrice: 89,
  //     rating: 4.8,
  //     reviewCount: 45,
  //   },
  //   {
  //     id: 2,
  //     name: "Classic Beige Coat",
  //     brand: "H&M",
  //     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  //     price: 140,
  //     discountPrice: null,
  //     rating: 4.5,
  //     reviewCount: 31,
  //   },
  //   {
  //     id: 3,
  //     name: "Modern Knit Sweater",
  //     brand: "Mango",
  //     image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  //     price: 95,
  //     discountPrice: 75,
  //     rating: 4.7,
  //     reviewCount: 20,
  //   },
  //   {
  //     id: 4,
  //     name: "Leather Handbag",
  //     brand: "Gucci",
  //     image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     price: 250,
  //     discountPrice: null,
  //     rating: 5,
  //     reviewCount: 78,
  //   },
  // ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" fontWeight={600} mb={6}>
        {title}
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
