package groupon_springboot_implementation.errors;

public class EmailPasswordMismatch extends Exception {
	public EmailPasswordMismatch(String message) {
		super(message);
	}
	
	public EmailPasswordMismatch() {
		super("The email and password do not match");
	}
}
