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
import groupon_springboot_implementation.errors.CouponAlreadyExists;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.TitleExists;
import groupon_springboot_implementation.facade.CompanyFacade;


@RestController
@RequestMapping("company")
@CrossOrigin(origins="http://localhost:4200")
public class CompanyController {
	
	@Autowired
	LoginController login;
	
	private long experationTime= System.currentTimeMillis()-1800000;
	
	@Autowired
	CompanyFacade compF;
	
	@Autowired
	private Map<String,Session> tokensMap;
	
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
	

	
	
	@PostMapping(path="/coupon/{token}")
	public ResponseEntity<?> addCoupon(@RequestBody Coupon coup, @PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		try {
			compF.addCoupon(coup);
			return new ResponseEntity<Coupon>(coup,HttpStatus.CREATED);
		} catch (TitleExists e) {
			return getEntity(e);
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	@PutMapping(path="/coupon/{token}")
	public ResponseEntity<?> updateCoupon(@RequestBody Coupon coup, @PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());

		try {
			compF.updateCoupon(coup);
			return new ResponseEntity<Coupon>(coup,HttpStatus.OK);
		} catch (CouponAlreadyExists e) {
			return getEntity(e);
		}}else {
			login.logout(token);
			return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	
	@DeleteMapping(path="/coupon/{token}/{id}")
	public ResponseEntity<?> deleteCoupon(@PathVariable String token, @PathVariable("id") int id){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());

		compF.deleteCoupon(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}else {
		login.logout(token);
		return new ResponseEntity<String>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}

	
	@GetMapping(path="/coupon/{token}")
	public ResponseEntity<?> getCompanyCoupons(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		ArrayList<Coupon> coupons = compF.getCompanyCoupons();
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);}
	}
	
		
		
	@GetMapping(path="coupon/category/{token}/{cat}")
	public ResponseEntity<?> getCompanyCoupons(@PathVariable String token, @PathVariable("cat") Category cat){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());
		ArrayList<Coupon> coupons =compF.getCompanyCouponsByCategory(cat);
		return new ResponseEntity<List<Coupon>>(coupons,HttpStatus.OK);
		}else {
			login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}
	
	
	@GetMapping(path="coupon/maxprice/{token}/{max}")
	public ResponseEntity<?>getCompanyCoupons(@PathVariable String token, @PathVariable("max") double max){
		Session s=isActive(token);
		if(s!=null && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());

		ArrayList<Coupon> coupons =compF.getCompanyCouponsByMaxPrice(max);
		return new ResponseEntity<List<Coupon>>(coupons ,HttpStatus.OK);
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}
	
	
	@GetMapping(path="{token}")
	public ResponseEntity<?> getCompanyDetails(@PathVariable String token){
		Session s=isActive(token);
		if(s!=null  && s.getLastAccessed()>=experationTime) {
			s.setLastAccessed(System.currentTimeMillis());

		Company comp =compF.getCompany();

		if(comp != null) return new ResponseEntity<Company>(comp,HttpStatus.OK);
		else return getEntity("No Company Found");
	}else {
		login.logout(token);
		return new ResponseEntity<>("Session Timeout",HttpStatus.UNAUTHORIZED);
	}}
}
