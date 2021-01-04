package com.salvoroni.narutopedia.DTOmodels;

public class CandidateDTO {
	private int oldKage;
	private int warId;


	public CandidateDTO(){}

	public int getOldKage(){
		return this.oldKage;
	}

	public void setOldKage(int oldKage){
		this.oldKage = oldKage;
	}

	public int getWarId(){
		return this.warId;
	}

	public void setWarId(int warId){
		this.warId = warId;
	}
}