package com.salvoroni.narutopedia.DTOmodels;

public class AddTechnicDTO {
	private String name;
	private Long type;
	private Long adtype;
	private boolean bloodrest;
	private Long rank;
	private String runes;

	public AddTechnicDTO(){}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setType(Long type){
		this.type = type;
	}

	public Long getType(){
		return this.type;
	}

	public void setAdtype(Long adtype){
		this.adtype = adtype;
	}

	public Long getAdtype(){
		return this.adtype;
	}

	public void setBloodrest(boolean bloodrest){
		this.bloodrest = bloodrest;
	}

	public boolean getBloodrest(){
		return this.bloodrest;
	}

	public void setRank(Long rank){
		this.rank = rank;
	}

	public Long getRank(){
		return this.rank;
	}

	public void setRunes(String runes){
		this.runes = runes;
	}

	public String getRunes(){
		return this.runes;
	}
}