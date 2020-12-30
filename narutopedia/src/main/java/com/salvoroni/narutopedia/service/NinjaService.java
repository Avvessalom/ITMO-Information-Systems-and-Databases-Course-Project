package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Ninja;
import com.salvoroni.narutopedia.repository.NinjaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NinjaService{
	@Autowired
	private NinjaRepository repository;

	public List<Ninja> findAll() {
		List<Ninja> countries = (List<Ninja>) repository.findAll();

		return countries;
	}

	/*public Ninja findById(Long id){
		return (Ninja) repository.findById(id);
	}*/

	public void deleteById(Long id){
		repository.deleteById(id);
	}

	public void save(Ninja ninja){
		repository.save(ninja);
	}
}