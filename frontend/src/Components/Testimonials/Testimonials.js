import { Container, Grid, Typography, Box } from "@mui/material";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Customer",
    message:
      "Amazing quality and beautiful designs. The shopping experience was smooth and enjoyable.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 2,
    name: "Michael Brown",
    role: "Regular Customer",
    message:
      "Fast delivery, great customer service, and products exactly like the pictures.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 3,
    name: "Emma Wilson",
    role: "Online Shopper",
    message: "I love the collection. The quality exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
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
