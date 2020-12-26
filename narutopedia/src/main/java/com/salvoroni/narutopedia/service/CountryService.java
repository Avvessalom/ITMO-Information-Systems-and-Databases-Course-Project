package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Country;
import com.salvoroni.narutopedia.repository.CountryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService implements ICountryService {
	@Autowired
	private CountryRepository repository;

	@Override
	public List<Country> findAll() {
		List<Country> countries = (List<Country>) repository.findAll();

		return countries;
	}
}