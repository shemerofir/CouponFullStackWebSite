package groupon_springboot_implementation.errors;

public class UniqueEmailException extends Exception {
	public UniqueEmailException() {
		super("Email already exist!");
	}
	
	public UniqueEmailException(String message) {
		super(message);
	}
}
