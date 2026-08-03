namespace BeautyFashionStore.DTO
{
    public class ProductDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Brand { get; set; }

        public string Image { get; set; }

        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        public double Rating { get; set; }

        public int ReviewCount { get; set; }
    }
}
