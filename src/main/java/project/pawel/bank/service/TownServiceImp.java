package project.pawel.bank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.pawel.bank.entity.Town;
import project.pawel.bank.repository.TownRepository;

@Service
public class TownServiceImp implements TownService {

	@Autowired
	private TownRepository townRepository;
	
	@Override
	public List<Town> getTowns() {
		
		return townRepository.findAll();
	}

}
