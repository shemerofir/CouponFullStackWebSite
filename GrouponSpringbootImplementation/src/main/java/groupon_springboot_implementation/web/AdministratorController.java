package groupon_springboot_implementation.web;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import groupon_springboot_implementation.beans.Category;
import groupon_springboot_implementation.beans.Company;
import groupon_springboot_implementation.beans.Coupon;
import groupon_springboot_implementation.beans.Customer;
import groupon_springboot_implementation.db.CouponDBDAO;
import groupon_springboot_implementation.errors.CustomerDoesNotExist;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.UniqueEmailException;
import groupon_springboot_implementation.errors.UniqueNameException;
import groupon_springboot_implementation.facade.AdminFacade;
import groupon_springboot_implementation.facade.Facade;



@RestController
@RequestMapping("admin")
@CrossOrigin(origins="http://localhost:4200")
public class AdministratorController {
	
	

	
	@Autowired
	private AdminFacade adminF;
	
	@Autowired
	private Map<String,Session> tokensMap;
	
	@Autowired
	LoginController login;
	
	private long experationTime= System.currentTimeMillis()-1800000;
	
	private Session isActive(String token) {
		return tokensMap.get(token);
	}
	

	public static ResponseEntity<String> getEntity(Exception e){
		return new ResponseEntity<String>( "{\"Server Error\":\""+ e.getMessage() +"\"}",
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
	public static ResponseEntity<String> getEntity(String s){
		return new ResponseEntity<String>( "{\"Server Error\":\""+ s +"\"}",
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
	


	/**
	 *          *********************COMPANY METHODS**********************************
	 */


	
	@PostMapping("/company/{token}")
	public ResponseEntity<?> addCompany(@RequestBody  Company comp, @PathVariable String token ){
		Session s=isActive(token);
		
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			adminF.addCompany(comp);
			
			return new ResponseEntity<Company>(comp,HttpStatus.CREATED);
		} catch (UniqueEmailException e) {
			return getEntity(e);
		} catch (UniqueNameException e) {
			return getEntity(e);
		}}
		else {
			login.logout(token);
			
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	@PutMapping("/company/{token}")
	public ResponseEntity<?> updateCompany(@RequestBody  Company comp, @PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			adminF.updateCompany(comp);
			return new ResponseEntity<Company>(comp,HttpStatus.OK);
		}catch(Exception e) {
			return getEntity(e);
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	
	@DeleteMapping(path="/company/{token}/{id}")
	public ResponseEntity<?> deleteCompany(@PathVariable String token, @PathVariable("id") int id){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		adminF.deleteCompany(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}
	
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping(path="/company/{token}")
	public ResponseEntity<?> getAllCompanies(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		return new ResponseEntity<List<Company>>(adminF.getAllCompanies(),HttpStatus.OK);
		}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	@GetMapping(path="/company/{token}/{id}")
	public ResponseEntity<?> getOneCompany(@PathVariable String token, @PathVariable("id") int id){
		Session s=isActive(token);
		if(s!=null  && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			return new ResponseEntity<Company>(adminF.getCompanyById(id), HttpStatus.OK);
		} catch (Exception e) {
			return getEntity("Company Not Found");		} 
		}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	/**
	 *          *********************CUSTOMER METHODS**********************************
	 */
	
	@PostMapping("/customer/{token}")
	public ResponseEntity<?>addCustomer(@RequestBody Customer cust,  @PathVariable String token){
		Session s=isActive(token);
		if(s!=null  && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			adminF.addCustomer(cust);
			return new ResponseEntity<Customer>(cust,HttpStatus.CREATED);
		} catch (UniqueEmailException e) {
			return getEntity(e);
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	@PutMapping("/customer/{token}")
	public ResponseEntity<?> updateCustomer(@RequestBody Customer cust, @PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			adminF.updateCustomer(cust);
			return new ResponseEntity<Customer>(cust,HttpStatus.OK);
		} catch (CustomerDoesNotExist e) {
			return getEntity(e);
		} catch (UniqueEmailException e) {
			return getEntity(e);
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	@GetMapping("/customer/{token}")
	public ResponseEntity<?> getAllCustomers(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		ArrayList<Customer> customers = adminF.getAllCustomers();
		return new ResponseEntity<List<Customer>>(customers,HttpStatus.OK);
		}else {
			login.logout(token);
			return new ResponseEntity<String>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}	
	}
	
	@GetMapping(path="/customer/{token}/{id}")
	public ResponseEntity<?> getOneCustomer(@PathVariable String token, @PathVariable("id") int id){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		Customer cust = adminF.getCustomerById(id);
		try {
			return new ResponseEntity<Customer>(cust,HttpStatus.OK);
		} catch (Exception e) {
			return getEntity("No Customer Found");
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	@DeleteMapping(path="/customer/{token}/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable String token, @PathVariable("id") int id){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		adminF.deleteCustomer(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}else {
		login.logout(token);
		return new ResponseEntity<String>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}

	}
	@GetMapping("/allCoupons/{token}")
	public ResponseEntity<?> getAllCoupons(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
			ArrayList<Coupon> coupons =	adminF.getAllCoupons();
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
		}else {
			login.logout(token);
			return new ResponseEntity<String>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}	
	}
	
	@GetMapping("coupon/category/{token}/{cat}")
	public ResponseEntity<?> getCouponsByCategory(@PathVariable String token, @PathVariable("cat") Category cat){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
			ArrayList<Coupon> coupons =	adminF.getCouponsByCategory(cat);
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
		}else {
			login.logout(token);
			return new ResponseEntity<String>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}	
	}
	
	@GetMapping("coupon/price/{token}/{max}")
	public ResponseEntity<?> getCouponsByMaxPrice(@PathVariable String token, @PathVariable("max") double max){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
			ArrayList<Coupon> coupons =	adminF.getCouponsByMaxPrice(max);
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
		}else {
			login.logout(token);
			return new ResponseEntity<String>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}	
	}
	}
