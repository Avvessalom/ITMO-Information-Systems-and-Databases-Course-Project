package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Clan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClanRepository extends CrudRepository<Clan, Long> {
	
}