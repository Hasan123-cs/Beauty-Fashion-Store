using BeautyFashionStore.DTO;

namespace BeautyFashionStore.Services.Interfaces
{
    public interface ICategory
    {
        public Task<List<CategoryDTO>> GetAllCategoriesAsync();
        public  Task<List<ProductDto>> GetFeaturedProducts();
        public  Task<List<ProductDto>> GetNewArrivals();
        public  Task<List<TestimonialDto>> GetTestimonials();

    }
}
