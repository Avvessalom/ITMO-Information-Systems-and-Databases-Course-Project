package com.salvoroni.narutopedia.service;

import com.salvoroni.narutopedia.model.Ninja;

import java.util.List;

public interface INinjaService {
	List<Ninja> findAll();
}