package project.pawel.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.pawel.bank.entity.Town;
import project.pawel.bank.service.TownService;

@RestController
@RequestMapping("/town")
public class TownController {

	@Autowired
	private TownService townService;
	
	@GetMapping
	public List<Town> getTowns(){
		return townService.getTowns();
	}
}
