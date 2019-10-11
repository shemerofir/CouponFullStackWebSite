package groupon_springboot_implementation.errors;

public class TitleExists extends Exception {
	public TitleExists() {
		super("Title already Exists");
	}
	
	public TitleExists(String message) {
		super(message);
	}
}
