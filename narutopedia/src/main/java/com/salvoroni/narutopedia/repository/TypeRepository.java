package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Type;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends CrudRepository<Type, Long> {
	
}