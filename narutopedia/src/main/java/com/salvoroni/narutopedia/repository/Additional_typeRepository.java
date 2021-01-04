package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Additional_type;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Additional_typeRepository extends CrudRepository<Additional_type, Long> {
	
}