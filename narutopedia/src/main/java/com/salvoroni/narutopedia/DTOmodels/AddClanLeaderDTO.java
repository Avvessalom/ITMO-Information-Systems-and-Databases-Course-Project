package com.salvoroni.narutopedia.DTOmodels;

public class AddClanLeaderDTO{
	private Long clan;
	private Long candidate;

	public AddClanLeaderDTO(){}

	public void setClan(Long clan){
		this.clan = clan;
	}

	public Long getClan(){
		return this.clan;
	}

	public void setCandidate(Long candidate){
		this.candidate = candidate;
	}

	public Long getCandidate(){
		return this.candidate;
	}
}