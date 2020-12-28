package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Ninja;
import com.salvoroni.narutopedia.repository.NinjaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NinjaService implements INinjaService {
	@Autowired
	private NinjaRepository repository;

	@Override
	public List<Ninja> findAll() {
		List<Ninja> countries = (List<Ninja>) repository.findAll();

		return countries;
	}
}