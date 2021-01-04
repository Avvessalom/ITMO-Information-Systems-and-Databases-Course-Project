package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Hidden_village;
import com.salvoroni.narutopedia.repository.VillageRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VillageService {
	@Autowired
	private VillageRepository repository;

	public List<Hidden_village> findAll() {
		List<Hidden_village> countries = (List<Hidden_village>) repository.findAll();

		return countries;
	}

	public Optional<Hidden_village> findById(Long id){
		return repository.findById(id);
	}

	public void save(Hidden_village village) {
		repository.save(village);
	}
}