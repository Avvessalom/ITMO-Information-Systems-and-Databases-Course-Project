package com.salvoroni.narutopedia;

import java.util.concurrent.atomic.AtomicLong;
import java.util.List;
import java.util.Date;

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

	@Autowired
	private MapService mapService;

	@Autowired
	private NinjaService ninjaService;

	@Autowired
	private ClanService clanService;

	@Autowired
	private VillageService villageService;

	@Autowired
	private CountryService countryService;

	@Autowired
	private WarService warService;

	@Autowired
	private BattleService battleService;

	@Autowired
	private CitizenService citizenService;

	@Autowired
	private TypeService typeService;

	@Autowired
	private Additional_typeService addTypeService;

	@Autowired
	private RankService rankService;

	@Autowired
	private TechnicService technicService;

	@Autowired
	private BijuService bijuService;

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

	@GetMapping("/battles")
	public List<AllBattleDTO> getBattles() {
		return (List<AllBattleDTO>) mapService.getBattles();
	}

	@GetMapping("/villages/kages")
	public List<NinjaDTO> getKages() {
		return (List<NinjaDTO>) mapService.getKages();
	}

	@GetMapping("/technics/types")
	public List<StdDTO> getTypes() {
		return (List<StdDTO>) mapService.getTypes();
	}

	@GetMapping("/technics/additionalType")
	public List<StdDTO> getAdditionalType() {
		return (List<StdDTO>) mapService.getAddTypes();
	}

	@GetMapping("/technics/rank")
	public List<StdDTO> getRanks() {
		return (List<StdDTO>) mapService.getRank();
	}

	@GetMapping("/bijus/jinchuurikiCandidats")
	public List<NinjaDTO> getJinchurikiCandidates(){
		return (List<NinjaDTO>) mapService.getJinchurikiCandidates();
	}

	@PostMapping("/villages/kageDeath")
	public List<NinjaDTO> getKageCandidates(@RequestBody CandidateDTO candidate){
		ninjaDeath(Long.valueOf(candidate.getOldKage()));
		return (List<NinjaDTO>) mapService.getKageCandidates(candidate);
	}

	@PostMapping("/ninja/death")
	public String ninjaDeath(@RequestParam(value = "id") Long ninjaId){
		try{
			Ninja ninja = ninjaService.findById(ninjaId).get();
			ninja.setStatus("dead");
			ninjaService.save(ninja);
			return "ok";
		} catch (Exception e){
			e.printStackTrace();
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
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/countries/declareWar")
	public String declareWar(@RequestBody DeclareWarDTO newWar) {
		try {
			War war = new War();
			war.setName(newWar.getName());
			war.setAttacking_country(countryService.findById(newWar.getAttacking()).get());
			war.setDefending_country(countryService.findById(newWar.getDefending()).get());
			war.setLoss_of_attackers(newWar.getLossa());
			war.setLoss_of_defenders(newWar.getLossd());
			war.setStart_date(new Date());
			warService.save(war);
			return "ok";
		} catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/countries/addBattle")
	public String addBattle(@RequestBody BattleDTO battleDTO) {
		try {
			Battle battle = new Battle();
			battle.setLoss(battleDTO.getLoss());
			battle.setDuration(battleDTO.getDuration());
			battle.setName(battleDTO.getName());
			battle.setDate_of_battle(new Date());
			battle.setWar(warService.findById(battleDTO.getWar()).get());
			battle.setTerritory(countryService.findById(battleDTO.getTerritory()).get());
			battleService.save(battle);
			return "ok";
		} catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/clans/addClan")
	public String addClan(@RequestBody AddClanDTO clanDTO){
		try{
			Clan clan = new Clan();
			clan.setName(clanDTO.getName());
			clan.setPrestige(clanDTO.getPrestige());
			clan.setVillage(villageService.findById(clanDTO.getVillage()).get());
			clanService.save(clan);
			return "ok";
		} catch (Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/clans/leader")
	public String addClanLeader(@RequestBody AddClanLeaderDTO leader) {
		try {
			Clan clan = clanService.findById(leader.getClan()).get();
			Ninja bossOfTheClan = ninjaService.findById(leader.getCandidate()).get();
			clan.getLeaders().add(bossOfTheClan);
			clanService.save(clan);
			return "ok";
		} catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/citizens/addNew")
	public String addCitizen(@RequestBody AddCitizenDTO citizen){
		try{
			Citizen newCitizen = new Citizen();
			newCitizen.setName(citizen.getName());
			newCitizen.setAge(citizen.getAge());
			newCitizen.setSex(citizen.getSex());
			newCitizen.setStatus(citizen.getStatus());
			newCitizen.setVillage(villageService.findById(citizen.getVillage()).get());
			citizenService.save(newCitizen);
			return "ok";
		}catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/technics/addNew")
	public String addTechnic(@RequestBody AddTechnicDTO newTech) {
		try {
			Technic tmp = new Technic();
			tmp.setBlood_restriction(newTech.getBloodrest());
			tmp.setRune_seals(newTech.getRunes());
			tmp.setName(newTech.getName());
			tmp.setType(typeService.findById(newTech.getType()).get());
			tmp.setAdditional_type(addTypeService.findById(newTech.getAdtype()).get());
			tmp.setRank(rankService.findById(newTech.getRank()).get());
			technicService.save(tmp);
			return "ok";
		}catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/ninja/parent")
	public String ninjaParentChild(@RequestBody ChildrenParentDTO cpDTO) {
		try{
			Ninja parent = ninjaService.findById(cpDTO.getParent()).get();
			Ninja child = ninjaService.findById(cpDTO.getChild()).get();
			parent.getChildren().add(child);
			ninjaService.save(parent);
			return "ok";
		} catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/villages/destroyVillage")
	public String destroyVillage(@RequestBody DestroyVillageDTO destVil){
		try {
			Hidden_village destroyed = villageService.findById(destVil.getVillageid()).get();
			Ninja destroyer = ninjaService.findById(destVil.getDestroyer()).get();
			destroyed.getDestroyers().add(destroyer);
			destroyed.setQuantity_of_destruction(destroyed.getQuantity_of_destruction() + 1);
			villageService.save(destroyed);
			return "ok";
		} catch(Exception e){
			e.printStackTrace();
			return "notok";
		}
	}

	@PostMapping("/bijus")
	public String sealBiju(@RequestBody SealBijuDTO seal){
		bijuService.sealTheBiju(seal.getBiju_id(), seal.getNinja_id());
		return "ok";
	}
}