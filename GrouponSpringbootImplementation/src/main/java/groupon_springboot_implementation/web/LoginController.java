package groupon_springboot_implementation.web;

import java.sql.SQLException;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import groupon_springboot_implementation.error.CouponSystemException;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.facade.Facade;
import groupon_springboot_implementation.login.ClientType;
import groupon_springboot_implementation.login.LoginManager;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController {

	@Autowired
	private Map<String,Session> tokensMap;
	@Autowired
	private LoginManager loginManager;
	
	@PostMapping("login")
	public ResponseEntity<String> login(@RequestParam String userName, @RequestParam String password, @RequestParam String type) throws EmailPasswordMismatch, SQLException {
		if(!type.equals("admin")&&!type.equals("company")&&!type.equals("customer")) {
			return new ResponseEntity<>("Wrong type",HttpStatus.UNAUTHORIZED);
		}
		Session session=new Session();
		Facade facade=null;
		String token=UUID.randomUUID().toString();
		
		long lastAccessed=System.currentTimeMillis();
		
			facade=loginManager.login(userName, password, ClientType.valueOf(type));
			if (facade!=null) {
				session.setFacade(facade);
				session.setLastAccessed(lastAccessed);
				tokensMap.put(token, session); 
				return new ResponseEntity<>("{\"token\":\""+token+"\"}",HttpStatus.OK);	
			}else {
				return new ResponseEntity<String>("Failed Login", HttpStatus.OK);
			}

		
	}
	
	@PostMapping(path="logout/{token}")
	public ResponseEntity<String> logout(@PathVariable String token){
		tokensMap.remove(token);
		return new ResponseEntity<String>("logged Out", HttpStatus.OK);
	}
}