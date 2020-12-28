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
		//HashSet<String> clanLeaders = new HashSet<String>();
		//for (Ninja s : clan.getLeaders()){
		//	clanLeaders.add(s.getName());
		//}
		if (clan.getLeaders().isEmpty()){
			clansDTO.setLeader("anarchy");
		} else {
			clansDTO.setLeader(clan.getLeaders().stream().findFirst().get().getName());
		}
		//clansDTO.setLeader(clanLeaders);
		if ( clan.getTechnics().size() == 0 ){
			clansDTO.setBlood(false);
		} else {
			clansDTO.setBlood(true);
		}
		return clansDTO;
	}
}