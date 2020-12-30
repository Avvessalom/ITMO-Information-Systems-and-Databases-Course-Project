package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.War;
import com.salvoroni.narutopedia.repository.WarRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WarService {
	@Autowired
	private WarRepository repository;

	public List<War> findAll() {
		return (List<War>) repository.findAll();
	}

	public void save(War war){
		repository.save(war);
	}

	public Optional<War> findById(Long id){
		return repository.findById(id);
	}
}