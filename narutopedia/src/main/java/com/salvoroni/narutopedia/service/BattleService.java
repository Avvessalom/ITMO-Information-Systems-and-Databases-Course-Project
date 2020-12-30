package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Battle;
import com.salvoroni.narutopedia.repository.BattleRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BattleService {
	@Autowired
	private BattleRepository repository;

	public List<Battle> findAll() {
		List<Battle> battles = (List<Battle>) repository.findAll();

		return battles;
	}

	public void save(Battle battle){
		repository.save(battle);
	}
}