package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.pawel.bank.Exception.CustomException;
import project.pawel.bank.entity.User;
import project.pawel.bank.service.UserService;

@CrossOrigin(origins = {"http://localhost:4200","http://77.55.209.207:4200"})
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping()
	public ResponseEntity addUser(@RequestBody User theUser) throws CustomException {
		theUser.setId(0);
		if(userService.getUser(theUser.getLogin())!= null){
			throw new CustomException("Login in use");
		}
		User user = userService.saveUser(theUser);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseEntity updateUser(@RequestBody User theUser) throws CustomException {
		User user = userService.getUser(theUser.getLogin());
		if(user == null){
			throw new CustomException("Not user with that login");
		}
			user.setPassword(theUser.getPassword());
			userService.saveUser(user);
			return new ResponseEntity(HttpStatus.OK);
	}
	
	@GetMapping("/{userLogin}")
	public ResponseEntity<User> getUser(@PathVariable String userLogin) throws CustomException {

		User user = userService.getUser(userLogin);
		if(user == null){
			throw new CustomException("User not found");
		}
		return new ResponseEntity<>(user,HttpStatus.OK);
	}

	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestBody User theUser){

		User user = userService.getUser(theUser.getLogin());

		if(user == null || !user.getPassword().equals(theUser.getPassword())){
			return new ResponseEntity("Nieprawidłowe dane logowania",HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity(user,HttpStatus.OK);
	}

}
