package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Clan;
import com.salvoroni.narutopedia.repository.ClanRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClanService {
	@Autowired
	private ClanRepository repository;

	public List<Clan> findAll() {
		return (List<Clan>) repository.findAll();
	}

	public Optional<Clan> findById(Long id){
		return repository.findById(id);
	}
}