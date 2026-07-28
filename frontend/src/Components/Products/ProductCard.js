import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Rating,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductCard({ product }) {
  const price = product.discountPrice ?? product.price;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.35s ease",
        "&:hover": {
          boxShadow: 8,
          transform: "translateY(-6px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",

          "& img": {
            transition: "transform .4s ease",
          },

          "&:hover img": {
            transform: "scale(1.05)",
          },

          "&:hover .quickAdd": {
            transform: "translateY(0)",
            opacity: 1,
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
        />

        {product.discountPrice && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "#111",
              color: "#fff",
              px: 1.5,
              py: 0.6,
              borderRadius: 1,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            SALE
          </Box>
        )}

        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "#fff",
            width: 42,
            height: 42,
            transition: ".3s",

            "&:hover": {
              bgcolor: "#111",
              color: "#fff",
            },
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>

        {/* Quick Add */}
        <Box
          className="quickAdd"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 60,
            bgcolor: "rgba(20,20,20,.92)",
            color: "#fff",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,

            transform: "translateY(100%)",
            opacity: 0,
            transition: ".3s ease",

            "&:hover": {
              bgcolor: "#000",
            },
          }}
        >
          <ShoppingCartOutlinedIcon fontSize="small" />

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Quick Add
          </Typography>
        </Box>
      </Box>

      <CardContent>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: 14,
            mb: 0.5,
          }}
        >
          {product.brand}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            minHeight: 56,
          }}
        >
          {product.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: 1,
          }}
        >
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />

          <Typography variant="body2" color="text.secondary">
            ({product.reviewCount})
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 2,
          }}
        >
          {product.discountPrice ? (
            <>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                }}
              >
                ${product.price}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#d32f2f",
                  fontWeight: 700,
                }}
              >
                ${product.discountPrice}
              </Typography>
            </>
          ) : (
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              ${price}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
