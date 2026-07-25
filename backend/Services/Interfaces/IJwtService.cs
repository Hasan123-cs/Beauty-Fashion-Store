using BeautyFashionStore.Models;

namespace BeautyFashionStore.Services.Interfaces
{
    public interface IJwtService
    {
        Task<string> CreateToken(ApplicationUser user, bool rememberMe);
    }
}
