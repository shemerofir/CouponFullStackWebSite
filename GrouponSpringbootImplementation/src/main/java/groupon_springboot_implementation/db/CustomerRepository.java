package groupon_springboot_implementation.db;

import org.springframework.data.jpa.repository.JpaRepository;

import groupon_springboot_implementation.beans.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
		Customer getCustomerByEmailAndPassword(String email, String password);
		Customer getCustomerByEmail(String email);
}
