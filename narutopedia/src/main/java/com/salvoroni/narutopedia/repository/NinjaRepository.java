package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Ninja;
import com.salvoroni.narutopedia.model.Hidden_village;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	List<Hidden_village> findByVillage(Long village);
}