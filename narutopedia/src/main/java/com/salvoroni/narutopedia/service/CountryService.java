package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Country;
import com.salvoroni.narutopedia.repository.CountryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {
	@Autowired
	private CountryRepository repository;

	public List<Country> findAll() {
		List<Country> countries = (List<Country>) repository.findAll();

		return countries;
	}
}