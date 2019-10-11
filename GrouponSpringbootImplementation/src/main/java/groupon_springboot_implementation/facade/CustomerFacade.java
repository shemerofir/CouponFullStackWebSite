package groupon_springboot_implementation.facade;

import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import groupon_springboot_implementation.beans.Category;
import groupon_springboot_implementation.beans.Coupon;
import groupon_springboot_implementation.beans.Customer;
import groupon_springboot_implementation.errors.CouponAlreadyPurchased;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.NoMoreCouponsLeft;

@Service
public class CustomerFacade extends ClientFacade {

	private int customerId;
	
	
	
	public CustomerFacade() {
		this.customerId = -1;
	}

	

	//********  LOGIN  ***********************

	@Override
	public int login(String email, String password) throws EmailPasswordMismatch, SQLException {
		Customer cust = custDB.getCustomerByEmailAndPassword(email, password);
		if(cust == null) throw new EmailPasswordMismatch();
		customerId = cust.getId();
		return cust.getId();
	}

	//***********************************
	//*********    CRUD METHODS   *******************
	//***********************************
	
	//******** CREATE ***********************

	public void purchaseCoupon(Coupon coup) throws NoMoreCouponsLeft, CouponAlreadyPurchased {
		
		Customer cust = this.getCustomerDetails();	
		
		if(cust.hasCoupon(coup) || coup.hasCustomer(cust) )throw new CouponAlreadyPurchased();
		if (coup.getAmount()<1)throw new NoMoreCouponsLeft(); 
		
		coup.setAmount(coup.getAmount()-1);
		cust.addCoupon(coup);
		coup.addCustomer(cust);
		
		custDB.updateCustomer(cust);
		coupDB.updateCoupon(coup);
		
	}
	//******** READ *************************

	public ArrayList<Coupon> getAllCustomerCoupons(){
		return coupDB.getCouponsByCustomer(this.getCustomerDetails());
	}
	//***********************************

	public ArrayList<Coupon> getAllCustomerCouponsByCategory(Category category){
		return coupDB.getCouponsByCustomerIdAndCategoryName(customerId, category);
	}
	//***********************************
	
	public ArrayList<Coupon> getAllCustomerCouponsByMaxPrice(double maxPrice){
		return coupDB.getCouponsByCustomerIdAndPriceLessThanEqual(customerId,maxPrice);
	}
	//***********************************

	public Customer getCustomerDetails() {
		return custDB.getCustomerById(customerId);
	}

}
