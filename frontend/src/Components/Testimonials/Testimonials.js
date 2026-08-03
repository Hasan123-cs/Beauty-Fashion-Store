import { Container, Grid, Typography, Box } from "@mui/material";

import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

export default function Testimonials() {
  // states
  const [testimonials, setTestimonials] = useState([]);
  //handlers
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://localhost:7066/api/home/testimonials",
        );
        console.log("Response:", response);
        const data = await response.json();
        console.log(data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 5,
          }}
        >
          What Our Customers Say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
