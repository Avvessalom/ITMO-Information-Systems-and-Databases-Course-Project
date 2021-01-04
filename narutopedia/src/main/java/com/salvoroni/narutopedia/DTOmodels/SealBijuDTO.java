package com.salvoroni.narutopedia.DTOmodels;

public class SealBijuDTO {
	private int biju_id;
	private int ninja_id;

	public SealBijuDTO(){}

	public void setBiju_id(int biju_id){
		this.biju_id = biju_id;
	}

	public int getBiju_id(){
		return this.biju_id;
	}

	public void setNinja_id(int ninja_id){
		this.ninja_id = ninja_id;
	}

	public int getNinja_id(){
		return this.ninja_id;
	}
}