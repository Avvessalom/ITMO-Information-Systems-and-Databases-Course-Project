package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Hidden_village;

import java.util.List;

public interface IVillageService {
	List<Hidden_village> findAll();
}