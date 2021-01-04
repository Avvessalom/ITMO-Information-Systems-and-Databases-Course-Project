package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Biju;
import com.salvoroni.narutopedia.repository.BijuRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BijuService {
	@Autowired
	private BijuRepository repository;

	public void sealTheBiju(int biju, int ninja){
		repository.sealTheBiju(biju, ninja);
	}
}