package com.salvoroni.narutopedia.repository;

import com.salvoroni.narutopedia.model.Biju;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface BijuRepository extends CrudRepository<Biju, Long> {
	@Query(nativeQuery = true, value = "select 1 from seal_the_biju( :biju , :ninja )")
	int sealTheBiju(@Param("biju") int bijuId, @Param("ninja") int ninjaId);
}