package project.pawel.bank.repository;

import org.springframework.data.repository.Repository;

import project.pawel.bank.entity.User;

public interface UserRepository extends Repository<User, Integer> {

	User findByLogin(String login);

	User save(User theUser);

}
