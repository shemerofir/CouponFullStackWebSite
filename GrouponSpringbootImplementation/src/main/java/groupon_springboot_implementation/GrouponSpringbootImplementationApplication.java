package groupon_springboot_implementation;

import java.sql.SQLException;

//import java.sql.Date;
//import java.util.ArrayList;
//import java.util.Calendar;
//import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import groupon_springboot_implementation.errors.CannotChangeName;
import groupon_springboot_implementation.errors.CompanyDoesNotExist;
import groupon_springboot_implementation.errors.CouponAlreadyExists;
import groupon_springboot_implementation.errors.CouponAlreadyPurchased;
import groupon_springboot_implementation.errors.CustomerDoesNotExist;
import groupon_springboot_implementation.errors.EmailPasswordMismatch;
import groupon_springboot_implementation.errors.NoMoreCouponsLeft;
import groupon_springboot_implementation.errors.TitleExists;
import groupon_springboot_implementation.errors.UniqueEmailException;
import groupon_springboot_implementation.errors.UniqueNameException;


@SpringBootApplication
public class GrouponSpringbootImplementationApplication {

	public static void main(String[] args)  {
		ConfigurableApplicationContext context = SpringApplication.run(GrouponSpringbootImplementationApplication.class, args);
		
		Test test = context.getBean(Test.class);
		
		try {
			test.showCase();
		} catch (EmailPasswordMismatch e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TitleExists e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UniqueEmailException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (UniqueNameException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CompanyDoesNotExist e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CustomerDoesNotExist e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CouponAlreadyExists e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoMoreCouponsLeft e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CouponAlreadyPurchased e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CannotChangeName e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
//		try {
//			test.testingPurchaseCoupon();
//		} catch (EmailPasswordMismatch | SQLException | UniqueEmailException | UniqueNameException | TitleExists
//				| NoMoreCouponsLeft | CouponAlreadyPurchased e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
	}

}
