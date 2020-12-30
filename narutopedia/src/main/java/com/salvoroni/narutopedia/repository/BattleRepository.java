package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Battle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BattleRepository extends CrudRepository<Battle, Long> {
	
}