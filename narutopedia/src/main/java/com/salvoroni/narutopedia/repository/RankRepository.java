package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Technic_rank;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RankRepository extends CrudRepository<Technic_rank, Long> {
	
}