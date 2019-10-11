package groupon_springboot_implementation.errors;

public class NoMoreCouponsLeft extends Exception {
	public NoMoreCouponsLeft() {
		super("Title already Exists");
	}
	
	public NoMoreCouponsLeft(String message) {
		super(message);
	}
}
