using BeautyFashionStore.DTO;
using BeautyFashionStore.DTOs;
using BeautyFashionStore.Models;
using BeautyFashionStore.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BeautyFashionStore.Controllers
{

    [ApiController]
    [Route("api/auth")]
    public class AccountController : ControllerBase
    {
        public IAuthService _authService;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(
            UserManager<ApplicationUser> userManager, IAuthService s)
        {
            _userManager = userManager;
            _authService = s;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto model)
        {
            var result = await _authService.Register(model);

            if (!result.Success)
                return BadRequest(result);

            return Ok(result);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var response = await _authService.Login(dto);

            if (!response.Success)
            {
                return Unauthorized(response);
            }

            return Ok(response);
        }
    }
}