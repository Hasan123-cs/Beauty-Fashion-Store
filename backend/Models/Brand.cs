using System.ComponentModel.DataAnnotations;

namespace BeautyFashionStore.Models
{
    public class Brand
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Description { get; set; }

        public string? LogoUrl { get; set; }

        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
