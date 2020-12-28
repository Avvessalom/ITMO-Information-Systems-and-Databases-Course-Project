package com.salvoroni.narutopedia.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.salvoroni.narutopedia.DTOmodels.*;
import com.salvoroni.narutopedia.model.*;
import com.salvoroni.narutopedia.repository.*;
import java.util.List;
import java.util.HashSet;
import java.util.stream.Collectors;

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
		villageDTO.setNumber_of_destruction(5);
		return villageDTO;
	}
}