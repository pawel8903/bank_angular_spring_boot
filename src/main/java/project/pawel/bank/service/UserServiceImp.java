package project.pawel.bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.pawel.bank.entity.User;
import project.pawel.bank.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User getUser(String userLogin) {
		return userRepository.findByLogin(userLogin);
		
	}
	
	public User saveUser(User theUser) {
		return userRepository.save(theUser);
	}
}
