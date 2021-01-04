package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Technic_rank;
import com.salvoroni.narutopedia.repository.RankRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RankService {
	@Autowired
	private RankRepository repository;

	public List<Technic_rank> findAll() {
		List<Technic_rank> rank = (List<Technic_rank>) repository.findAll();

		return rank;
	}

	public Optional<Technic_rank> findById(Long id){
		return repository.findById(id);
	}
}