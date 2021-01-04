package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Additional_type;
import com.salvoroni.narutopedia.repository.Additional_typeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Additional_typeService {
	@Autowired
	private Additional_typeRepository repository;

	public List<Additional_type> findAll() {
		List<Additional_type> types = (List<Additional_type>) repository.findAll();

		return types;
	}

	public Optional<Additional_type> findById(Long id){
		return repository.findById(id);
	}
}