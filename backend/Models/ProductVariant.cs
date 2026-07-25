namespace BeautyFashionStore.Models
{
    public class ProductVariant
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int ColorId { get; set; }

        public Color Color { get; set; }

        public int SizeId { get; set; }

        public Size Size { get; set; }

        public string SKU { get; set; }

        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        public DateTime? DiscountStart { get; set; }

        public DateTime? DiscountEnd { get; set; }

        public int StockQuantity { get; set; }

        public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
