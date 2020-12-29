package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Citizen;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitizenRepository extends CrudRepository<Citizen, Long> {
	
}