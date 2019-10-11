package groupon_springboot_implementation.db;

import org.springframework.data.jpa.repository.JpaRepository;

import groupon_springboot_implementation.beans.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {	
		Company getCompanyByEmail(String email);
		Company getCompanyByName(String name);
		Company getCompanyByEmailAndPassword(String email, String password);
		
}
