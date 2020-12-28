package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Technic;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnicRepository extends CrudRepository<Technic, Long> {
	
}