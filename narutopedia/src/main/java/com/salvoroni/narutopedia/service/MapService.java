package com.salvoroni.narutopedia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.salvoroni.narutopedia.DTOmodels.*;
import com.salvoroni.narutopedia.model.*;
import com.salvoroni.narutopedia.repository.*;
import java.util.List;
import java.util.LinkedList;
import java.util.HashSet;
import java.util.stream.Collectors;
import java.util.Iterator;

@Service
public class MapService {
	@Autowired
	private NinjaRepository ninjaRepository;

	@Autowired
	private WarRepository warRepository;

	@Autowired
	private ClanRepository clanRepository;

	@Autowired
	private VillageRepository villageRepository;

	@Autowired
	private CountryRepository countryRepository;

	@Autowired
	private BijuRepository bijuRepository;

	@Autowired
	private CitizenRepository citizenRepository;

	@Autowired
	private TechnicRepository technicRepository;

	@Autowired
	private TypeService typeService;

	@Autowired
	private Additional_typeService addTypeService;

	@Autowired
	private RankService rankService;

	@Autowired
	private BattleService battleService;

	public List<AllBattleDTO> getBattles(){
		return ((List<Battle>) battleService
			.findAll())
			.stream()
			.map(this::convertToBattleDTO)
			.collect(Collectors.toList());
	}

	private AllBattleDTO convertToBattleDTO(Battle battle){
		AllBattleDTO battleDTO = new AllBattleDTO();
		battleDTO.setBattle_id(battle.getId());
		battleDTO.setTerritory(battle.getTerritory().getName());
		battleDTO.setLoss(battle.getLoss());
		battleDTO.setDuration(battle.getDuration());
		battleDTO.setName(battle.getName());
		battleDTO.setWar(battle.getWar().getName());
		return battleDTO;
	}

	public List<NinjaDTO> getNinjasWithVillage() {
		return ((List<Ninja>) ninjaRepository
			.findAll())
			.stream()
			.map(this::convertToNinjaDTO)
			.collect(Collectors.toList());
	}

	private NinjaDTO convertToNinjaDTO(Ninja ninja) {
		NinjaDTO ninjaDTO = new NinjaDTO();
		ninjaDTO.setId(ninja.getId());
		ninjaDTO.setName(ninja.getName());
		ninjaDTO.setAge(ninja.getAge());
		ninjaDTO.setSex(ninja.getSex());
		ninjaDTO.setVillage(ninja.getVillage().getName());
		ninjaDTO.setClan(ninja.getClan().getName());
		ninjaDTO.setStatus(ninja.getStatus());
		return ninjaDTO;
	}

	public List<ClansDTO> getClans() {
		return ((List<Clan>) clanRepository
			.findAll())
			.stream()
			.map(this::convertToClanDTO)
			.collect(Collectors.toList());
	}

	public ClansDTO convertToClanDTO(Clan clan) {
		ClansDTO clansDTO = new ClansDTO();
		clansDTO.setId(clan.getId());
		clansDTO.setName(clan.getName());
		clansDTO.setVillage(clan.getVillage().getName());
		clansDTO.setPrestige(clan.getPrestige());
		clansDTO.setNinjas(clan.getNinja().size());
		if (clan.getLeaders().isEmpty()){
			clansDTO.setLeader("anarchy");
		} else if (clan
			.getLeaders()
			.stream()
			.filter(leader -> {
				if (leader.getStatus().equals("alive"))
					return true;
				return false;
			})
			.collect(Collectors.toSet())
			.isEmpty())
		{
			clansDTO.setLeader("all leaders is dead");
		} else {
			clansDTO.setLeader(clan
				.getLeaders()
				.stream()
				.filter(leader -> {
					if (leader.getStatus().equals("alive"))
						return true;
					return false;
				})
				.findFirst()
				.get()
				.getName());
		}
		if ( clan.getTechnics().size() == 0 ){
			clansDTO.setBlood(false);
		} else {
			clansDTO.setBlood(true);
		}
		return clansDTO;
	}

	public List<VillagesDTO> getVillages() {
		return ((List<Hidden_village>) villageRepository
			.findAll())
			.stream()
			.map(this::convertToVillageDTO)
			.collect(Collectors.toList());
	}

	private VillagesDTO convertToVillageDTO(Hidden_village village) {
		VillagesDTO villageDTO = new VillagesDTO();
		villageDTO.setId(village.getId());
		villageDTO.setName(village.getName());
		if (village.getCountry() == null) {
			villageDTO.setCountry("independent");
		} else {
			villageDTO.setCountry(village.getCountry().getName());
		}
		villageDTO.setNinjas(village.getNinja().size());
		villageDTO.setClans(village.getClans().size());
		villageDTO.setNumber_of_destruction(village.getQuantity_of_destruction());
		return villageDTO;
	}

	public List<CountriesDTO> getCountries() {
		return ((List<Country>) countryRepository
			.findAll())
			.stream()
			.map(this::convertToCountryDTO)
			.collect(Collectors.toList());
	}

	private CountriesDTO convertToCountryDTO(Country country) {
		CountriesDTO countryDTO = new CountriesDTO();
		countryDTO.setId(country.getId());
		countryDTO.setName(country.getName());
		countryDTO.setLords(country.getLords().size());
		countryDTO.setVillage(country.getVillage().getName());
		countryDTO.setWars(country.getAttacking_country().size()+
			country.getDefending_country().size()
			);
		if (country.getLords().isEmpty()){
			countryDTO.setCountryLord("citizens");
		} else {
			Iterator<Country_lord> iter = country.getLords().iterator();
			Country_lord tmp = iter.next();
			while (iter.hasNext()){
				Country_lord tmpp = iter.next();
				if (tmp.getBeginning_of_reign().compareTo(tmpp.getBeginning_of_reign()) >= 0) {
					tmp = tmpp;
				}
			}
			countryDTO.setCountryLord(tmp.getName());
			if (tmp.getStatus().equals("dead")){
				countryDTO.setCountryLord("lord is dead");
			}
		}
		countryDTO.setCitizens(country.getVillage().getCitizens().size());
		return countryDTO;
	}

	public List<BijuDTO> getBijus() {
		return ((List<Biju>) bijuRepository
			.findAll())
			.stream()
			.map(this::convertToBijuDTO)
			.collect(Collectors.toList());
	}

	private BijuDTO convertToBijuDTO(Biju biju) {
		BijuDTO bijuDTO = new BijuDTO();
		bijuDTO.setId(biju.getId());
		bijuDTO.setName(biju.getName());
		bijuDTO.setTails(biju.getCount_of_tails());
		if (!biju.getJinchuriki().isEmpty()){
			List<String> jinchurikiName = new LinkedList<>();
			for (Ninja jinchuriki : biju.getJinchuriki()){
				jinchurikiName.add(jinchuriki.getName());
			}
			bijuDTO.setJinchuuriki(jinchurikiName);
		}
		return bijuDTO;
	}

	public List<CitizenDTO> getCitizens() {
		return ((List<Citizen>) citizenRepository
			.findAll())
			.stream()
			.map(this::convertToCitizenDTO)
			.collect(Collectors.toList());
	}

	private CitizenDTO convertToCitizenDTO(Citizen citizen) {
		CitizenDTO citizenDTO = new CitizenDTO();
		citizenDTO.setId(citizen.getId());
		citizenDTO.setName(citizen.getName());
		citizenDTO.setVillage(citizen.getVillage().getName());
		citizenDTO.setAge(citizen.getAge());
		citizenDTO.setSex(citizen.getSex());
		citizenDTO.setStatus(citizen.getStatus());
		return citizenDTO;
	}

	public List<TechnicDTO> getTechnics() {
		return ((List<Technic>) technicRepository
			.findAll())
			.stream()
			.map(this::convertToTechnicDTO)
			.collect(Collectors.toList());
	}

	private TechnicDTO convertToTechnicDTO(Technic technic) {
		TechnicDTO technicDTO = new TechnicDTO();
		technicDTO.setId(technic.getId());
		technicDTO.setName(technic.getName());
		technicDTO.setType(technic.getType().getName());
		technicDTO.setAdditionalType(technic.getAdditional_type().getName());
		technicDTO.setBloodRestriction(technic.getBlood_restriction());
		technicDTO.setRank(technic.getRank().getName());
		technicDTO.setRuneSeals(technic.getRune_seals());
		return technicDTO;
	}

	public List<WarDTO> getWars() {
		return ((List<War>) warRepository
			.findAll())
			.stream()
			.map(this::convertToWarDTO)
			.collect(Collectors.toList());
	}

	private WarDTO convertToWarDTO(War war){
		WarDTO warDTO = new WarDTO();
		warDTO.setId(war.getId());
		warDTO.setName(war.getName());
		warDTO.setAttacking_country(war.getAttacking_country().getName());
		warDTO.setDefending_country(war.getDefending_country().getName());
		warDTO.setLoss_of_attackers(war.getLoss_of_attackers());
		warDTO.setLoss_of_defenders(war.getLoss_of_defenders());
		warDTO.setStart_date(war.getStart_date());
		warDTO.setEnd_date(war.getEnd_date());
		return warDTO;
	}

	public List<NinjaDTO> getJinchurikiCandidates() {
		return ((List<Ninja>) ninjaRepository
			.findAll())
			.stream()
			.filter(ninja -> {
				if (ninja.getStatus().equals("alive") && ninja.getBiju().isEmpty())
					return true;
				return false;
			})
			.map(this::convertToNinjaDTO)
			.collect(Collectors.toList());
	}

	public List<NinjaDTO> getKages() {
		return ((List<Ninja>) ninjaRepository
			.findAll())
			.stream()
			.filter(ninja -> {
				for (Ninjas_rank rank : ninja.getRanks()) {
					if (rank.getName().equals("kage"))
						return true;
				}
				return false;
			})
			.map(this::convertToNinjaDTO)
			.collect(Collectors.toList());
	}

	public List<NinjaDTO> getKageCandidates(CandidateDTO candidate){
		return ((List<Ninja>) ninjaRepository
			.choose_kage_candidates(candidate.getOldKage(), candidate.getWarId()))
			.stream()
			.map(this::convertToNinjaDTO)
			.collect(Collectors.toList());
	}

	public List<StdDTO> getTypes(){
		return ((List<Type>) typeService
			.findAll())
			.stream()
			.map(this::convertToSTD)
			.collect(Collectors.toList());
	}

	private StdDTO convertToSTD(Type type){
		StdDTO std = new StdDTO();
		std.setId(type.getId());
		std.setName(type.getName());
		return std;
	}

	public List<StdDTO> getAddTypes(){
		return ((List<Additional_type>) addTypeService
			.findAll())
			.stream()
			.map(this::convertToStd)
			.collect(Collectors.toList());
	}

	private StdDTO convertToStd(Additional_type type){
		StdDTO std = new StdDTO();
		std.setId(type.getId());
		std.setName(type.getName());
		return std;
	}

	public List<StdDTO> getRank(){
		return ((List<Technic_rank>) rankService
			.findAll())
			.stream()
			.map(this::convertToStd)
			.collect(Collectors.toList());
	}

	private StdDTO convertToStd(Technic_rank type){
		StdDTO std = new StdDTO();
		std.setId(type.getId());
		std.setName(type.getName());
		return std;
	}
}