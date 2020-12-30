package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.War;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarRepository extends CrudRepository<War, Long> {
	
}