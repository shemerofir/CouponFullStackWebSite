package groupon_springboot_implementation.errors;

public class CannotChangeName extends Exception {
	public CannotChangeName() {
		super("Cannot change company name");
	}
	
	public CannotChangeName(String message) {
		super(message);
	}
}
