using BeautyFashionStore.Data;
using BeautyFashionStore.DTO;
using BeautyFashionStore.Models;
using BeautyFashionStore.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BeautyFashionStore.Services.Implementation
{
    public class CategoryService : ICategory
    {
        private readonly AppDbContext _db;

        public CategoryService(AppDbContext db)
        {
            _db = db;
        }

        public async Task<List<CategoryDTO>> GetAllCategoriesAsync()
        {
            var categories = await _db.Categories
                .AsNoTracking()
                .Select(c => new CategoryDTO
                {
                    Id = c.Id,
                    Name = c.Name,
                    Description = c.Description,
                    images = c.images
                })
                .ToListAsync();
            Console.WriteLine(categories);

            return categories;
        }

        // get featured products in home page
        public async Task<List<ProductDto>> GetFeaturedProducts()
        {
            var products = await _db.Products

        .Where(p => p.IsActive && p.IsFeatured)
        .Include(p => p.Brand)
        .Include(p => p.Images)
        .Include(p => p.Variants)
        .Include(p => p.Reviews)
        .Select(p => new ProductDto
        {
            Id = p.Id,
            Name = p.Name,
            Brand = p.Brand.Name,
            Image = p.Images
        
        .Where(x => x.IsMain)
        .Select(x => x.ImageUrl)
        .FirstOrDefault(),
            Price = p.Variants.Min(x => x.Price),



            DiscountPrice = p.Variants
        .Where(x => x.DiscountPrice.HasValue)
        .Select(x => x.DiscountPrice)
        .Min(),


            Rating = p.Reviews.Any() ? p.Reviews.Average(x => x.Rating) : 0,
            ReviewCount = p.Reviews.Count()
        })
        .ToListAsync();

            return products;

        }
        // get all new arrival products 
        public async Task<List<ProductDto>> GetNewArrivals()
        {
            var products = await _db.Products
               .Where(p => p.IsActive)
               .OrderByDescending(p => p.CreatedAt)
               .Include(p => p.Brand)
               .Include(p => p.Images)
               .Include(p => p.Variants)
               .Include(p => p.Reviews)
               .Take(8)
               .Select(p => new ProductDto
               {
                   Id = p.Id,
                   Name = p.Name,
                   Brand = p.Brand.Name,

                   Image = p.Images
                       .Where(x => x.IsMain)
                       .Select(x => x.ImageUrl)
                       .FirstOrDefault(),

                   Price = p.Variants
                       .Min(x => x.Price),

                   DiscountPrice = p.Variants
                       .Where(x => x.DiscountPrice.HasValue)
                       .Select(x => x.DiscountPrice)
                       .Min(),

                   Rating = p.Reviews.Any()? p.Reviews.Average(x => x.Rating): 0,

                   ReviewCount = p.Reviews.Count()
               })
               .ToListAsync();


            return products;
        }

        //get all comments reactions .. 
        public async Task<List<TestimonialDto>> GetTestimonials()
        {
            var testimonials = await _db.Reviews
             .Include(r => r.User)
             .OrderByDescending(r => r.Rating)
             .Take(6)
             .Select(r => new TestimonialDto
             {
                 Id = r.Id,
                 Name = r.User.FirstName + " " + r.User.LastName,
                 Role = "Customer",
                 Message = r.Comment,
                 // ediit it to be a real photo of customer (before deploy )
                 Image = "https://randomuser.me/api/portraits/lego/1.jpg",
                 Rating = r.Rating
             })
             .ToListAsync();



           return testimonials;
        }
    }
}