package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Technic;
import com.salvoroni.narutopedia.repository.TechnicRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TechnicService {
	@Autowired
	private TechnicRepository repository;

	public List<Technic> findAll() {
		List<Technic> rank = (List<Technic>) repository.findAll();

		return rank;
	}

	public Optional<Technic> findById(Long id){
		return repository.findById(id);
	}

	public void save(Technic technic){
		repository.save(technic);
	}
}