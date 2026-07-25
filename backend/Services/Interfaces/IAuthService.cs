using BeautyFashionStore.DTO;
using BeautyFashionStore.DTOs;
using BeautyFashionStore.Models;

namespace BeautyFashionStore.Services.Interfaces
{
    public interface IAuthService
    {
         Task<ApiResponse<string>> Register(RegisterDto model);

        Task<ApiResponse<string>> Login(LoginDto model);

    }
}
