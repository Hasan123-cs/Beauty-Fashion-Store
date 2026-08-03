import { Container, Typography, Grid } from "@mui/material";

import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";

export default function Categories() {
  // states
  const [categories, setCategories] = useState([]);
  // simulate the loading slider (feature)
  const [loading, setLoading] = useState(true);
  //  handlers
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://localhost:7066/api/home");
        console.log("Response:", response);
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

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
