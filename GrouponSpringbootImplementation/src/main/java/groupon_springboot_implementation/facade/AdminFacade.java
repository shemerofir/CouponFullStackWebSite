package groupon_springboot_implementation.facade;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import groupon_springboot_implementation.beans.Category;
import groupon_springboot_implementation.beans.Company;
import groupon_springboot_implementation.beans.Coupon;
import groupon_springboot_implementation.beans.Customer;
import groupon_springboot_implementation.errors.CannotChangeName;
import groupon_springboot_implementation.errors.CompanyDoesNotExist;
import groupon_springboot_implementation.errors.CustomerDoesNotExist;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.UniqueEmailException;
import groupon_springboot_implementation.errors.UniqueNameException;

@Service
public class AdminFacade extends ClientFacade {
	
	
	private int loggedIn;

	public AdminFacade() {}
	
	
	//************************  LOGIN  *********************************************************************

	@Override
	public int login(String email, String password) throws EmailPasswordMismatch, SQLException {
		if(! email.equals("admin@admin") || ! password.equals("admin")) throw new EmailPasswordMismatch();
		loggedIn = 1;
		return 1;
	}
	
	
	//*****************************************************************************************************
	//**************************    CRUD METHODS   ********************************************************
	//*****************************************************************************************************
	
	//************************ CREATE *********************************************************************
	public void addCompany(Company comp) throws UniqueEmailException, UniqueNameException  {
		if(compDB.getCompanybyEmail(comp.getEmail()) != null) throw new UniqueEmailException();
		if(compDB.getCompanyByName(comp.getName()) != null) throw new UniqueNameException();
		compDB.addCompany(comp);		
	}
	
	public void addCustomer(Customer cust) throws UniqueEmailException {
		if(custDB.getCustomerByEmail(cust.getEmail()) != null) throw new UniqueEmailException();
		custDB.addCustomer(cust);
	}
	
	//************************ READ ***********************************************************************
	
	public ArrayList<Company> getAllCompanies(){
		return compDB.getAllCompanies();
	}
	
	public Company getCompanyById(int id) {
		return compDB.getCompanyById(id);
	}
	
	
	public ArrayList<Customer> getAllCustomers(){
		return custDB.getAllCustomers();
	}
	
	public Customer getCustomerById(int id) {
		return custDB.getCustomerById(id);
	}
	
	public ArrayList<Coupon> getAllCoupons() {
		return coupDB.getAllCoupons();
	}
	
	public ArrayList<Coupon> getCouponsByCategory(Category categoryName){
		return coupDB.getCouponsByCategoryName(categoryName);
	}
	
	public ArrayList<Coupon> getCouponsByMaxPrice(double maxPrice){
		return coupDB.getCouponsByPriceLessThan(maxPrice);
	}
	
	//************************ UPDATE *********************************************************************
	
	public void updateCompany(Company comp) throws CompanyDoesNotExist, CannotChangeName {
		
		
		Company updatedCompany = compDB.getCompanyById(comp.getId());
		
		if(updatedCompany ==null) throw new CompanyDoesNotExist();
		if(! comp.getName().equals(updatedCompany.getName())) throw new CannotChangeName();
		updatedCompany.setEmail(comp.getEmail());
		updatedCompany.setPassword(comp.getPassword());
		compDB.updateCompany(updatedCompany);
	}
	
	public void updateCustomer(Customer cust) throws CustomerDoesNotExist, UniqueEmailException {
		Customer updatedCustomer = custDB.getCustomerById(cust.getId());
		if(updatedCustomer == null) throw new CustomerDoesNotExist();
		if(custDB.getCustomerByEmail(cust.getEmail()) != null && updatedCustomer.getId() != cust.getId()) throw new UniqueEmailException();

		updatedCustomer.setEmail(cust.getEmail());
		updatedCustomer.setFirstName(cust.getFirstName());
		updatedCustomer.setLastName(cust.getLastName());
		updatedCustomer.setPassword(cust.getPassword());
		updatedCustomer.setCoupons(cust.getCoupons());
		
		custDB.updateCustomer(updatedCustomer);
	}
	//************************ DELETE *********************************************************************
	public void deleteCompany(int id) {
		ArrayList<Coupon> coupons = coupDB.getCouponsByCompanyId(id);
		/**
		 * currently I am not happy with this implementation because it is 
		 * extremely costly not only am I using a loop within a loop 
		 * (which indicates a n^2 cost)
		 * I am also accessing the DB twice  on each one of the inner loops
		 * 
		 * but currently I cannot think of a better option without dealing 
		 * with cascade issues that break the app
		 * 
		 * look for better solution
		 */
		for (Coupon coupon : coupons) {	
			List<Customer> currentCustomers = coupon.getCustomer();
			Customer cust;
			for (int i = 0; i < currentCustomers.size(); i++) {
				cust = currentCustomers.get(i);		
				cust.removeCoupon(coupon);
				custDB.updateCustomer(cust);
			}
			
		}
		
		compDB.deleteCompany(id);
	}
	
	public void deleteCustomer(int id) {
		custDB.deleteCustomer(id);
	}
	

	


}
