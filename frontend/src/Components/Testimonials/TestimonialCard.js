import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

export default function TestimonialCard({ testimonial }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        p: 2,
        height: "100%",
        border: "1px solid #eee",
      }}
    >
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
            mb: 3,
            fontStyle: "italic",
          }}
        >
          "{testimonial.message}"
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src={testimonial.image}
            alt={testimonial.name}
            sx={{
              width: 55,
              height: 55,
            }}
          />

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
              }}
            >
              {testimonial.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {testimonial.role}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
