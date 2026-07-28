import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export default function CategoryCard({ category }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="320"
            image={category.image}
            alt={category.name}
            sx={{
              transition: "transform 0.5s ease",

              "&:hover": {
                transform: "scale(1.6)",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.05))",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            pb: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 600,
            }}
          >
            {category.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
