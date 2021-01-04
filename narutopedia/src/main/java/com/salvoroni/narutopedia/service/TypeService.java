package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Type;
import com.salvoroni.narutopedia.repository.TypeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TypeService {
	@Autowired
	private TypeRepository repository;

	public List<Type> findAll() {
		List<Type> types = (List<Type>) repository.findAll();

		return types;
	}

	public Optional<Type> findById(Long id){
		return repository.findById(id);
	}
}