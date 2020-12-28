package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Hidden_village;
import com.salvoroni.narutopedia.repository.VillageRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VillageService implements IVillageService {
	@Autowired
	private VillageRepository repository;

	@Override
	public List<Hidden_village> findAll() {
		List<Hidden_village> countries = (List<Hidden_village>) repository.findAll();

		return countries;
	}
}