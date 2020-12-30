package com.salvoroni.narutopedia.DTOmodels;

public class AddClanDTO {
	private String name;
	private int prestige;
	private Long village;

	public AddClanDTO(){}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setVillage(Long village){
		this.village = village;
	}

	public Long getVillage(){
		return this.village;
	}

	public void setPrestige(int prestige){
		this.prestige = prestige;
	}

	public int getPrestige(){
		return this.prestige;
	}
}