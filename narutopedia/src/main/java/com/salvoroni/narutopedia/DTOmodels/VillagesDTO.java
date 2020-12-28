package com.salvoroni.narutopedia.DTOmodels;

public class VillagesDTO {
	private Long id;
	private String name;
	private String country;
	private int ninjas;
	private int clans;
	private int number_of_destruction;

	public VillagesDTO(){}

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

	public void setCountry(String country){
		this.country = country;
	}

	public String getCountry(){
		return this.country;
	}

	public void setNinjas(int ninjas){
		this.ninjas = ninjas;
	}

	public int getNinjas(){
		return this.ninjas;
	}

	public void setClans(int clans){
		this.clans = clans;
	}

	public int getClans(){
		return this.clans;
	}

	public void setNumber_of_destruction(int number_of_destruction){
		this.number_of_destruction = number_of_destruction;
	}

	public int getNumber_of_destruction(){
		return this.number_of_destruction;
	}
}