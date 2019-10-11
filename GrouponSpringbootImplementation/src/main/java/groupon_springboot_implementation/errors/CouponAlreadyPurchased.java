package groupon_springboot_implementation.errors;

public class CouponAlreadyPurchased extends Exception {
	public CouponAlreadyPurchased(String message) {
		super(message);
	}
	public CouponAlreadyPurchased() {
		super("This coupon was already purchased");
	}
}
