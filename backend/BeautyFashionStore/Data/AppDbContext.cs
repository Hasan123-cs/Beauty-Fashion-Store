

using BeautyFashionStore.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

 namespace BeautyFashionStore.Data
    {
        public class AppDbContext : IdentityDbContext<ApplicationUser>
        {
            public AppDbContext(DbContextOptions<AppDbContext> options)
                : base(options)
            {
            }

            public DbSet<Address> Addresses { get; set; }
            public DbSet<Brand> Brands { get; set; }
            public DbSet<Cart> Carts { get; set; }
            public DbSet<CartItem> CartItems { get; set; }
            public DbSet<Category> Categories { get; set; }
            public DbSet<Color> Colors { get; set; }
            public DbSet<Order> Orders { get; set; }
            public DbSet<OrderItem> OrderItems { get; set; }
            public DbSet<Payment> Payments { get; set; }
            public DbSet<Product> Products { get; set; }
            public DbSet<ProductImage> ProductImages { get; set; }
            public DbSet<ProductVariant> ProductVariants { get; set; }
            public DbSet<Review> Reviews { get; set; }
            public DbSet<Shipment> Shipments { get; set; }
            public DbSet<Size> Sizes { get; set; }
            public DbSet<WishlistItem> WishlistItems { get; set; }

            protected override void OnModelCreating(ModelBuilder builder)
            {
                base.OnModelCreating(builder);

                // Category Self Reference
                builder.Entity<Category>()
                    .HasOne(c => c.ParentCategory)
                    .WithMany(c => c.Children)
                    .HasForeignKey(c => c.ParentCategoryId)
                    .OnDelete(DeleteBehavior.Restrict);

                // User -> Address
                builder.Entity<Address>()
                    .HasOne(a => a.User)
                    .WithMany(u => u.Addresses)
                    .HasForeignKey(a => a.UserId);

                // User -> Cart
                builder.Entity<Cart>()
                    .HasOne(c => c.User)
                    .WithMany(u => u.Carts)
                    .HasForeignKey(c => c.UserId);

                // Cart -> CartItems
                builder.Entity<CartItem>()
                    .HasOne(ci => ci.Cart)
                    .WithMany(c => c.Items)
                    .HasForeignKey(ci => ci.CartId);

                // ProductVariant -> CartItems
                builder.Entity<CartItem>()
                    .HasOne(ci => ci.ProductVariant)
                    .WithMany(v => v.CartItems)
                    .HasForeignKey(ci => ci.ProductVariantId);

                // User -> Orders
                builder.Entity<Order>()
                    .HasOne(o => o.User)
                    .WithMany(u => u.Orders)
                    .HasForeignKey(o => o.UserId);

                // Order -> Address
                builder.Entity<Order>()
                    .HasOne(o => o.Address)
                    .WithMany()
                    .HasForeignKey(o => o.AddressId)
                    .OnDelete(DeleteBehavior.Restrict);

                // Order -> OrderItems
                builder.Entity<OrderItem>()
                    .HasOne(oi => oi.Order)
                    .WithMany(o => o.Items)
                    .HasForeignKey(oi => oi.OrderId);

                // ProductVariant -> OrderItems
                builder.Entity<OrderItem>()
                    .HasOne(oi => oi.ProductVariant)
                    .WithMany(v => v.OrderItems)
                    .HasForeignKey(oi => oi.ProductVariantId);

                // Order -> Payment (1:1)
                builder.Entity<Payment>()
                    .HasOne(p => p.Order)
                    .WithOne(o => o.Payment)
                    .HasForeignKey<Payment>(p => p.OrderId);

                // Order -> Shipment (1:1)
                builder.Entity<Shipment>()
                    .HasOne(s => s.Order)
                    .WithOne()
                    .HasForeignKey<Shipment>(s => s.OrderId);

                // Product -> Brand
                builder.Entity<Product>()
                    .HasOne(p => p.Brand)
                    .WithMany(b => b.Products)
                    .HasForeignKey(p => p.BrandId);

                // Product -> Category
                builder.Entity<Product>()
                    .HasOne(p => p.Category)
                    .WithMany(c => c.Products)
                    .HasForeignKey(p => p.CategoryId);

                // Product -> Images
                builder.Entity<ProductImage>()
                    .HasOne(pi => pi.Product)
                    .WithMany(p => p.Images)
                    .HasForeignKey(pi => pi.ProductId);

                // Product -> Variants
                builder.Entity<ProductVariant>()
                    .HasOne(v => v.Product)
                    .WithMany(p => p.Variants)
                    .HasForeignKey(v => v.ProductId);

                // Variant -> Color
                builder.Entity<ProductVariant>()
                    .HasOne(v => v.Color)
                    .WithMany(c => c.Variants)
                    .HasForeignKey(v => v.ColorId);

                // Variant -> Size
                builder.Entity<ProductVariant>()
                    .HasOne(v => v.Size)
                    .WithMany(s => s.Variants)
                    .HasForeignKey(v => v.SizeId);

                // Review
                builder.Entity<Review>()
                    .HasOne(r => r.User)
                    .WithMany(u => u.Reviews)
                    .HasForeignKey(r => r.UserId);

                builder.Entity<Review>()
                    .HasOne(r => r.Product)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(r => r.ProductId);

                // Wishlist
                builder.Entity<WishlistItem>()
                    .HasOne(w => w.User)
                    .WithMany(u => u.WishlistItems)
                    .HasForeignKey(w => w.UserId);

                builder.Entity<WishlistItem>()
                    .HasOne(w => w.Product)
                    .WithMany(p => p.WishlistItems)
                    .HasForeignKey(w => w.ProductId);

                // ---------- Indexes ----------

                builder.Entity<ProductVariant>()
                    .HasIndex(v => v.SKU)
                    .IsUnique();

                builder.Entity<WishlistItem>()
                    .HasIndex(w => new { w.UserId, w.ProductId })
                    .IsUnique();

                builder.Entity<CartItem>()
                    .HasIndex(c => new { c.CartId, c.ProductVariantId })
                    .IsUnique();

                builder.Entity<Review>()
                    .HasIndex(r => new { r.UserId, r.ProductId })
                    .IsUnique();
            }
        }
    }

