using BeautyFashionStore.DTO;
using BeautyFashionStore.DTOs;
using BeautyFashionStore.Models;
using BeautyFashionStore.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Google.Apis.Auth;

namespace BeautyFashionStore.Controllers
{

    [ApiController]
    [Route("api/auth")]
    public class AccountController : ControllerBase
    {
        public IJwtService jwtSer;
        public IAuthService _authService;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(
            UserManager<ApplicationUser> userManager, IAuthService s, IJwtService jwtService)
        {
            _userManager = userManager;
            _authService = s;
            jwtSer = jwtService;
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

        [HttpPost("google-login")]
        public async Task<IActionResult> GoogleLogin(GoogleLoginRequest request)
        {
            var payload =
                await GoogleJsonWebSignature.ValidateAsync(
                    request.Token
                );
            string email = payload.Email;

            string name = payload.Name;
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = email,
                    Email = email,
                    FirstName = name
                   ,
                    LastName = name
                };
                var createResult =await _userManager.CreateAsync(user);
                if (!createResult.Succeeded)
                {
                    return BadRequest(createResult.Errors);
                }

            }
            var token = await jwtSer.CreateToken(user,false);
            return Ok(new
            {
                token = token,
                email = user.Email,
                name = user.FirstName
            });

        }
    }
}