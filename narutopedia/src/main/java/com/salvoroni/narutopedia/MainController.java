package com.salvoroni.narutopedia;

import java.util.concurrent.atomic.AtomicLong;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;

import com.salvoroni.narutopedia.model.*;
import com.salvoroni.narutopedia.service.*;
import com.salvoroni.narutopedia.DTOmodels.*;

@RestController
public class MainController {

	//private static final String template = "Hello, %s!";
	//private final AtomicLong counter = new AtomicLong();

	//@GetMapping("/greeting")
	//public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
	//	return new Greeting(counter.incrementAndGet(), String.format(template, name));
	//}

	@Autowired
	private MapService mapService;

	@Autowired
	private NinjaService ninjaService;

	@Autowired
	private ClanService clanService;

	@Autowired
	private VillageService villageService;

	@GetMapping("/ninja")
	public List<NinjaDTO> getNinja() {
		return (List<NinjaDTO>) mapService.getNinjasWithVillage();
	}

	@GetMapping("/clans")
	public List<ClansDTO> getClans() {
		return (List<ClansDTO>) mapService.getClans();
	}

	@GetMapping("/villages")
	public List<VillagesDTO> getVillages(){
		return (List<VillagesDTO>) mapService.getVillages();
	}

	@GetMapping("/countries")
	public List<CountriesDTO> getCountries(){
		return (List<CountriesDTO>) mapService.getCountries();
	}

	@GetMapping("/bijus")
	public List<BijuDTO> getBijus(){
		return (List<BijuDTO>) mapService.getBijus();
	}

	@GetMapping("/citizens")
	public List<CitizenDTO> getCitizens() {
		return (List<CitizenDTO>) mapService.getCitizens();
	}

	@GetMapping("/technics")
	public List<TechnicDTO> getTechnics() {
		return (List<TechnicDTO>) mapService.getTechnics();
	}

	@GetMapping("/wars")
	public List<WarDTO> getWars() {
		return (List<WarDTO>) mapService.getWars();
	}

	@GetMapping("/villages/kages")
	public List<NinjaDTO> getKages() {
		return (List<NinjaDTO>) mapService.getKages();
	}

	@PostMapping("/ninja/death")
	public String ninjaDeath(@RequestParam(value = "id") Long ninjaId){
		try{
			ninjaService.deleteById(ninjaId);
			return "ok";
		} catch (EmptyResultDataAccessException ex){
			return "notok";
		}
	}

	@PostMapping(path = "/ninja/addNew", consumes = "application/json")
	public String addNewNinja(@RequestBody AddNewNinjaDTO newNinja){
		try{
			Ninja ninja = new Ninja();
			ninja.setName(newNinja.getName());
			ninja.setClan(clanService.findById(newNinja.getClan()).get());
			ninja.setVillage(villageService.findById(newNinja.getVillage()).get());
			ninja.setStatus(newNinja.getStatus());
			ninja.setAge(newNinja.getAge());
			ninja.setSex(newNinja.getSex());
			ninjaService.save(ninja);
			return "ok";
		} catch(Exception e) {
			return "notok";
		}
	}
}