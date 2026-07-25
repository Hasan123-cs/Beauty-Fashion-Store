namespace BeautyFashionStore.Models
{
    public class Size
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<ProductVariant> Variants { get; set; } = new List<ProductVariant>();
    }
}
