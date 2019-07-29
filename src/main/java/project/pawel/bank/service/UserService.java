package project.pawel.bank.service;

import project.pawel.bank.entity.User;

public interface UserService {

	User saveUser(User theUser);

	User getUser(String userLogin);

}
