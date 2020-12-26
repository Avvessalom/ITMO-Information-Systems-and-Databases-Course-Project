package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long> {
	
}