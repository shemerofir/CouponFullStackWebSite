package groupon_springboot_implementation.errors;

public class CustomerDoesNotExist extends Exception {
	public CustomerDoesNotExist(String message) {
		super(message);
	}
	
	public CustomerDoesNotExist() {
		super("The customer does not exist");
	}
}
