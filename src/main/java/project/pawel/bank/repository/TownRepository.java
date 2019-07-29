package project.pawel.bank.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import project.pawel.bank.entity.Town;

public interface TownRepository extends Repository<Town, Integer> {

	List<Town> findAll();

}
