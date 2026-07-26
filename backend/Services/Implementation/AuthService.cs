using BeautyFashionStore.DTO;
using BeautyFashionStore.DTOs;
using BeautyFashionStore.Models;
using BeautyFashionStore.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BeautyFashionStore.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IJwtService _jwtService;


        public AuthService(
            UserManager<ApplicationUser> userManager,SignInManager<ApplicationUser> s , IJwtService z)
        {
            _signInManager = s;
            _jwtService = z;
            _userManager = userManager;
        }


         async Task<ApiResponse<string>> Register(RegisterDto model)
        {

            var existingUser =
                await _userManager.FindByEmailAsync(model.Email);


            if (existingUser != null)
            {
                return ApiResponse<string>
                    .ErrorResponse(
                    new List<string>
                    {
                        "Email already exists"
                    });
            }



            var user = new ApplicationUser
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                PhoneNumber = model.Phone,
                UserName = model.Email
            };


            var result = await _userManager.CreateAsync(
                    user,
                    model.Password
                    
                );

            if (!result.Succeeded)
            {
                return ApiResponse<string>
                    .ErrorResponse(
                    result.Errors
                    .Select(e => e.Description)
                    .ToList()
                );
            }
            await _userManager.AddToRoleAsync(user, "Customer");


            return ApiResponse<string>
                .SuccessResponse(
                    null,
                    "Account created successfully"
                );
        }



         async Task<ApiResponse<string>> Login(LoginDto dto)
        {
            var user = await _userManager.FindByEmailAsync(dto.Email);

            if (user == null)
            {
                return new ApiResponse<string>
                {
                    Success = false,
                    Message = "Invalid email or password"
                };
            }

            var result = await _signInManager.CheckPasswordSignInAsync(
                user,
                dto.Password,
               
                false);

            if (!result.Succeeded)
            {
                return new ApiResponse<string>
                {
                    Success = false,
                    Message = "Invalid email or password"
                };
            }

            var token = await _jwtService.CreateToken(user,dto.RememberMe);

            return new ApiResponse<string>
            {
                Success = true,
                Message = "Login successful",
                Data = token
            };
        }

        Task<ApiResponse<string>> IAuthService.Register(RegisterDto model)
        {
            return Register(model);
        }

        Task<ApiResponse<string>> IAuthService.Login(LoginDto model)
        {
            return Login(model);
        }

        public Task<string> CreateToken(ApplicationUser user)
        {
            throw new NotImplementedException();
        }
    }
}