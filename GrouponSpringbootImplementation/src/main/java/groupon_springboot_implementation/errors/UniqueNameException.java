package groupon_springboot_implementation.errors;

public class UniqueNameException extends Exception {
	public UniqueNameException() {
		super("Name already exist!");
	}
	
	public UniqueNameException(String message) {
		super(message);
	}
}
