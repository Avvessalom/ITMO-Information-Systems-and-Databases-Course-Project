package com.salvoroni.narutopedia;

import java.util.concurrent.atomic.AtomicLong;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;


import com.salvoroni.narutopedia.model.*;
import com.salvoroni.narutopedia.service.*;
import com.salvoroni.narutopedia.DTOmodels.*;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}

	@Autowired
	private MapService mapService;

	@GetMapping("/ninja")
	public List<NinjaDTO> getNinja() {
		return (List<NinjaDTO>) mapService.getNinjasWithVillage();
	}

	@GetMapping("/clans")
	public List<ClansDTO> getClans() {
		return (List<ClansDTO>) mapService.getClans();
	}
}