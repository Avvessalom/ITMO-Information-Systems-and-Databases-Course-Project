package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Hidden_village;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VillageRepository extends CrudRepository<Hidden_village, Long> {
	
}