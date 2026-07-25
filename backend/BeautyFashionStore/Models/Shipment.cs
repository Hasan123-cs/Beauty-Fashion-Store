namespace BeautyFashionStore.Models
{
    public class Shipment
    {
        public int Id { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }

        public string Carrier { get; set; }          // DHL, Aramex, SMSA...

        public string? TrackingNumber { get; set; }

        public decimal ShippingCost { get; set; }

        public ShipmentStatus Status { get; set; }

        public DateTime? ShippedAt { get; set; }

        public DateTime? DeliveredAt { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
