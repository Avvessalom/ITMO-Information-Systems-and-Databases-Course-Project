package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Biju;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BijuRepository extends CrudRepository<Biju, Long> {
	
}