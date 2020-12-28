package com.salvoroni.narutopedia.DTOmodels;

public class CountriesDTO {
	private Long id;
	private String name;
	private String countryLord;
	private String village;
	private int wars;
	private int lords;
	private int citizens;

	public CountriesDTO() {}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setCountryLord(String countryLord){
		this.countryLord = countryLord;
	}

	public String getCountryLord(){
		return this.countryLord;
	}

	public void setVillage(String village){
		this.village = village;
	}

	public String getVillage(){
		return this.village;
	}

	public void setWars(int wars){
		this.wars = wars;
	}

	public int getWars(){
		return this.wars;
	}

	public void setLords(int lords){
		this.lords = lords;
	}

	public int getLords(){
		return this.lords;
	}

	public void setCitizens(int citizens){
		this.citizens = citizens;
	}

	public int getCitizens(){
		return this.citizens;
	}
}