package groupon_springboot_implementation.web;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import groupon_springboot_implementation.beans.Category;
import groupon_springboot_implementation.beans.Coupon;
import groupon_springboot_implementation.beans.Customer;
import groupon_springboot_implementation.errors.CouponAlreadyPurchased;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.NoMoreCouponsLeft;
import groupon_springboot_implementation.facade.CustomerFacade;


@RestController
@RequestMapping("customer")
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {

	
	@Autowired
	CustomerFacade custF;
	
	@Autowired
	private Map<String,Session> tokensMap;
	
	@Autowired
	LoginController login;
	
	private long experationTime= System.currentTimeMillis()-1800000;
	
	private Session isActive(String token) {
		return tokensMap.get(token);}
	
	public static ResponseEntity<String> getEntity(Exception e){
		return new ResponseEntity<String>( "{\"Server Error\":\""+ e.getMessage() +"\"}",
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
	public static ResponseEntity<String> getEntity(String s){
		return new ResponseEntity<String>( "{\"Server Error\":\""+ s +"\"}",
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
	

	
	@PostMapping(path="coupon/{token}")
	public ResponseEntity<?> purchaseCoupon(@PathVariable String token ,@RequestBody Coupon coup){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			custF.purchaseCoupon(coup);
			return new ResponseEntity<Coupon>(coup,HttpStatus.CREATED);
		} catch (NoMoreCouponsLeft | CouponAlreadyPurchased e) {
			return getEntity(e);
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	
	@GetMapping(path= "coupon/{token}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		ArrayList<Coupon> coupons =custF.getAllCustomerCoupons() ;		
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
		}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	
	@GetMapping(path="coupon/category/{token}/{cat}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable String token, @PathVariable("cat") Category cat){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());	
	return new ResponseEntity<List<Coupon>>(custF.getAllCustomerCouponsByCategory(cat),HttpStatus.OK);
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}
	
		
		
	@GetMapping(path="coupon/maxprice/{token}/{max}")
	public ResponseEntity<?> getCustomerCoupons(@PathVariable String token, @PathVariable("max") double max){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		ArrayList<Coupon> coupons =custF.getAllCustomerCouponsByMaxPrice(max);
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}
	
	@GetMapping(path="{token}")
	public ResponseEntity<?> getCustomerDetails(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		Customer cust = custF.getCustomerDetails();
		if(cust !=null) return new ResponseEntity<Customer>(cust, HttpStatus.OK);
		else return getEntity("No Customer Found");
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}
}
	
}







