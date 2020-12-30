package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Citizen;
import com.salvoroni.narutopedia.repository.CitizenRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CitizenService {
	@Autowired
	private CitizenRepository repository;

	public List<Citizen> findAll() {
		List<Citizen> citizens = (List<Citizen>) repository.findAll();

		return citizens;
	}

	public void save(Citizen citizen){
		repository.save(citizen);
	}
}