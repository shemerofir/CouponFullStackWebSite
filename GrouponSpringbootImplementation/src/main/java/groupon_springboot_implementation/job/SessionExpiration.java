package groupon_springboot_implementation.job;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import groupon_springboot_implementation.web.LoginController;
import groupon_springboot_implementation.web.Session;

@Component
public class SessionExpiration implements Runnable {
	
	private boolean quit = false;
	
	@Autowired
	private Map<String, Session> tokenMap;
	private LoginController login;

	@Override
	public void run() {
		long currentTime = System.currentTimeMillis();
		long halfHour = 1000*60*30;
		System.out.println("Session: thread running");
		
		while (!quit) {
			System.out.println("Session: new Round");
			tokenMap.forEach((k, v)->{
				if (v.getLastAccessed()+ halfHour < currentTime) login.logout(k);
				System.out.println("logged out: " + k);
				
			});
			
			try {
				Thread.sleep(halfHour);
			}catch (InterruptedException e) {
				System.out.println();
			}
			
		}
	}
	public void stop() {
		quit = true;
	}

}
