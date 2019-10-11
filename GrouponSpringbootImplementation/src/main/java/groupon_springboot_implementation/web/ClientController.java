package groupon_springboot_implementation.web;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.facade.AdminFacade;
import groupon_springboot_implementation.facade.CompanyFacade;
import groupon_springboot_implementation.facade.CustomerFacade;
import groupon_springboot_implementation.login.ClientType;
import groupon_springboot_implementation.login.LoginManager;

@RestController
@RequestMapping("login")
@CrossOrigin(origins="http://localhost:4200")
public abstract class ClientController {
	


	@Autowired 
	private LoginManager loginM;
	
	
	@PostMapping
	public ResponseEntity<?> login(String email, String password, ClientType clientType){
		try {
			
			switch(clientType) {
			case admin:
				return new ResponseEntity<AdminFacade>((AdminFacade) loginM.login(email, password, clientType),HttpStatus.OK);
			case company:
				return new ResponseEntity<CompanyFacade>( (CompanyFacade) loginM.login(email, password, clientType), HttpStatus.OK);			
			case customer:
				return new ResponseEntity<CustomerFacade>( (CustomerFacade) loginM.login(email, password, clientType),HttpStatus.OK);
			default:
				return new ResponseEntity<String>("{\"error\":\"Client Type Not Found!\"}", HttpStatus.INTERNAL_SERVER_ERROR);	
			}
			
		} catch (EmailPasswordMismatch | SQLException e) {
			return new ResponseEntity<String>("{\"error\":\""+e.getMessage()+"\"}",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
}
