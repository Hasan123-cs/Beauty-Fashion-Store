using System.ComponentModel.DataAnnotations;

namespace BeautyFashionStore.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Description { get; set; }

        public int? ParentCategoryId { get; set; }

        public Category? ParentCategory { get; set; }

        public ICollection<Category> Children { get; set; } = new List<Category>();

        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
