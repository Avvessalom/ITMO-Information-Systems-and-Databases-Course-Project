package com.salvoroni.narutopedia.DTOmodels;

public class DeclareWarDTO {
	private String name;
	private Long attacking;
	private Long defending;
	private int lossa;
	private int lossd;



	public DeclareWarDTO(){}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setAttacking(Long attacking){
		this.attacking = attacking;
	}

	public Long getAttacking(){
		return this.attacking;
	}

	public void setDefending(Long defending){
		this.defending = defending;
	}

	public Long getDefending(){
		return this.defending;
	}

	public void setLossa(int lossa){
		this.lossa = lossa;
	}

	public int getLossa(){
		return this.lossa;
	}

	public void setLossd(int lossd){
		this.lossd = lossd;
	}

	public int getLossd(){
		return this.lossd;
	}
}