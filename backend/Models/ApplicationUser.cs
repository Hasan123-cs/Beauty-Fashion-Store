using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace BeautyFashionStore.Models
{
    
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation Properties
        public ICollection<Address> Addresses { get; set; } = new List<Address>();
        public ICollection<Order> Orders { get; set; } = new List<Order>();
        public ICollection<Cart> Carts { get; set; } = new List<Cart>();
        public ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();
        public ICollection<Review> Reviews { get; set; } = new List<Review>();
    }
}
