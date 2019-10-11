package groupon_springboot_implementation.facade;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;

import groupon_springboot_implementation.db.CompanyDBDAO;
import groupon_springboot_implementation.db.CouponDBDAO;
import groupon_springboot_implementation.db.CustomerDBDAO;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;

public abstract class ClientFacade implements Facade {
	
	@Autowired
	protected CustomerDBDAO custDB;
	@Autowired
	protected CouponDBDAO coupDB ;
	@Autowired
	protected CompanyDBDAO compDB;
	
	
	public abstract int login (String email, String password) throws EmailPasswordMismatch, SQLException;

}
