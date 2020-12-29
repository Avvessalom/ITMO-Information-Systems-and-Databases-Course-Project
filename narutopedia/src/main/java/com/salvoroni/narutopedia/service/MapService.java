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

	@Autowired
	private ClanRepository clanRepository;

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
		} else {
			clansDTO.setLeader(clan.getLeaders().stream().findFirst().get().getName());
		}
		if ( clan.getTechnics().size() == 0 ){
			clansDTO.setBlood(false);
		} else {
			clansDTO.setBlood(true);
		}
		return clansDTO;
	}

	@Autowired
	private VillageRepository villageRepository;

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

	@Autowired
	private CountryRepository countryRepository;

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
		}
		countryDTO.setCitizens(country.getVillage().getCitizens().size());
		return countryDTO;
	}

	@Autowired
	private BijuRepository bijuRepository;

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

	@Autowired
	private CitizenRepository citizenRepository;

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

	@Autowired
	private TechnicRepository technicRepository;

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
}