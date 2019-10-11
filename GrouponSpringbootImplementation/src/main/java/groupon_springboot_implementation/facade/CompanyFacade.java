package groupon_springboot_implementation.facade;

import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import groupon_springboot_implementation.beans.Category;
import groupon_springboot_implementation.beans.Company;
import groupon_springboot_implementation.beans.Coupon;
import groupon_springboot_implementation.errors.CouponAlreadyExists;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.TitleExists;


@Service
public class CompanyFacade extends ClientFacade {
	
	private int companyId;
	
	
	public CompanyFacade() {
		companyId = -1;
	}

	//************************  LOGIN  *********************************************************************

	
	@Override
	public int login(String email, String password) throws EmailPasswordMismatch, SQLException {
		Company comp = compDB.getCompanyByEmailAndPassword(email, password);
		if(comp ==null) throw new EmailPasswordMismatch();
		companyId = comp.getId();
		return comp.getId();		
	}

	//*****************************************************************************************************
	//**************************    CRUD METHODS   ********************************************************
	//*****************************************************************************************************
	
	//************************ CREATE *********************************************************************
	public void addCoupon(Coupon coup) throws TitleExists {
		if(coupDB.getCouponByCompanyIdAndTitle(companyId, coup.getTitle())!= null) throw new TitleExists();
		coup.setCompany(compDB.getCompanyById(companyId));
		coupDB.addCoupon(coup);		
	}
	//************************ READ ***********************************************************************
	public ArrayList<Coupon> getCompanyCoupons(){
		return coupDB.getCouponsByCompanyId(companyId);
	}
	
	public ArrayList<Coupon> getCompanyCouponsByCategory(Category cat){
		return coupDB.getCouponsByCompanyIdAndCategoryName(companyId, cat);
	}
	
	public ArrayList<Coupon> getCompanyCouponsByMaxPrice(double maxPrice){
		return coupDB.getCouponsByCompanyIdAndPriceLessThanEqual(companyId, maxPrice);
	}
	
	public Company getCompany() {
		return compDB.getCompanyById(companyId);
	}
	//************************ UPDATE *********************************************************************
	
	public void updateCoupon(Coupon coup) throws CouponAlreadyExists {
		Coupon coupFromDB = coupDB.getCouponById(coup.getId());
		if( coupFromDB == null) throw new CouponAlreadyExists();
		
		coupFromDB.setAmount(coup.getAmount());
		coupFromDB.setCategoryName(coup.getCategoryName());
		coupFromDB.setDescription(coup.getDescription());
		coupFromDB.setEndDate(coup.getEndDate());
		coupFromDB.setImage(coup.getImage());
		coupFromDB.setPrice(coup.getPrice());
		coupFromDB.setStartDate(coup.getStartDate());
		coupFromDB.setTitle(coup.getTitle());
		coupDB.updateCoupon(coupFromDB);
		
	}
	//************************ DELETE *********************************************************************
	public void deleteCoupon(int id) {
		
		Coupon coup = coupDB.getCouponById(id);
		this.getCompany().removeCoupon(coup);	
		coupDB.updateCoupon(coup);
		coupDB.deleteCoupon(id);
	}
	
}
