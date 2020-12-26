package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Country;

import java.util.List;

public interface ICountryService {
	List<Country> findAll();
}