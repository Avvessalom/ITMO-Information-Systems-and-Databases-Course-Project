package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Ninja;
import com.salvoroni.narutopedia.model.Hidden_village;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	@Query(nativeQuery = true, value = "select * from choose_kage_candidates( :old_kage , :war )")
	List<Ninja> choose_kage_candidates(@Param("old_kage") int oldKage, @Param("war") int warId);
}