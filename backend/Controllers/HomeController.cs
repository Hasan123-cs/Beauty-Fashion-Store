using BeautyFashionStore.DTO;
using BeautyFashionStore.Models;
using BeautyFashionStore.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace BeautyFashionStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly ICategory _categoryService;

        public HomeController(ICategory categoryService)
        {
            _categoryService = categoryService;
        }


        
        [HttpGet]
        public async Task<IActionResult> GetAllCategoriesAsync()
        {
            var categories = await _categoryService.GetAllCategoriesAsync();

            return Ok(categories);
        }




        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        [HttpGet("featured-products")]
        public async Task<IActionResult> GetFeaturedProducts()
        {
            var featuredProducts = await _categoryService.GetFeaturedProducts();
            return Ok(featuredProducts);
        }

        [HttpGet("new-arrivals")]
        public async Task<IActionResult> GetNewArrivals()
        {
           var newArrivals = await _categoryService.GetNewArrivals();
            return Ok(newArrivals);
        }


        [HttpGet("testimonials")]
        public async Task<IActionResult> GetTestimonials()
        {
            var testimonials = await _categoryService.GetTestimonials();
            return Ok(testimonials);
        }

    }
}

