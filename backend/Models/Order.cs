namespace BeautyFashionStore.Models
{
    public class Order
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        public int AddressId { get; set; }

        public Address Address { get; set; }

        public decimal TotalAmount { get; set; }

        public string Status { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();

        public Payment Payment { get; set; }
    }
}
