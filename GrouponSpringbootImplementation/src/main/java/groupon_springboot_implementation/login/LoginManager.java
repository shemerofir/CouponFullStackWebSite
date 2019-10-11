package groupon_springboot_implementation.login;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.facade.AdminFacade;
import groupon_springboot_implementation.facade.ClientFacade;
import groupon_springboot_implementation.facade.CompanyFacade;
import groupon_springboot_implementation.facade.CustomerFacade;

@Service
public class LoginManager {
	
	@Autowired
	protected AdminFacade adminF;
	
	@Autowired
	protected CompanyFacade compF;
	
	@Autowired
	protected CustomerFacade custF;
	
	
	public ClientFacade login(String email, String password, ClientType clientType) throws EmailPasswordMismatch, SQLException{	
		switch (clientType) {
		case admin:
			if(adminF.login(email, password) ==1) return adminF;
		case company:
			if(compF.login(email, password) >0) return compF;
		case customer:
			if(custF.login(email, password)>0) return custF;
		default:
			return null;	
		}
				
	}
}
