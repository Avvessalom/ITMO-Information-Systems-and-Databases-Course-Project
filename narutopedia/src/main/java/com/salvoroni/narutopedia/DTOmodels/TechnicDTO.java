package com.salvoroni.narutopedia.DTOmodels;

public class TechnicDTO {
	private Long id;
	private String name;
	private String type;
	private String additionalType;
	private boolean bloodRestriction;
	private String rank;
	private String runeSeals;

	public TechnicDTO(){}

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

	public void setType(String type){
		this.type = type;
	}

	public String getType(){
		return this.type;
	}

	public void setAdditionalType(String additionalType){
		this.additionalType = additionalType;
	}

	public String getAdditionalType(){
		return this.additionalType;
	}

	public void setBloodRestriction(boolean bloodRestriction){
		this.bloodRestriction = bloodRestriction;
	}

	public boolean getBloodRestriction(){
		return this.bloodRestriction;
	}

	public void setRank(String rank){
		this.rank = rank;
	}

	public String getRank(){
		return this.rank;
	}

	public void setRuneSeals(String runeSeals){
		this.runeSeals = runeSeals;
	}

	public String getRuneSeals(){
		return this.runeSeals;
	}
}