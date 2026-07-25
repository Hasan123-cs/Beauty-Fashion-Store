using Microsoft.AspNetCore.Mvc.ViewEngines;
using System.ComponentModel.DataAnnotations;

namespace BeautyFashionStore.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Description { get; set; }

        public bool IsActive { get; set; } = true;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public int BrandId { get; set; }

        public Brand Brand { get; set; }

        public ICollection<ProductImage> Images { get; set; } = new List<ProductImage>();

        public ICollection<ProductVariant> Variants { get; set; } = new List<ProductVariant>();

        public ICollection<Review> Reviews { get; set; } = new List<Review>();

        public ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();
    }
}
