package com.salvoroni.narutopedia.DTOmodels;

import java.util.Set;

public class ClansDTO {
	private Long id;
	private String name;
	private String village;
	private int prestige;
	private int ninjas;
	private String leader;
	private boolean blood;

	public ClansDTO(){}

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

	public void setVillage(String village){
		this.village = village;
	}

	public String getVillage(){
		return this.village;
	}

	public void setPrestige(int prestige){
		this.prestige = prestige;
	}

	public int getPrestige(){
		return this.prestige;
	}

	public void setNinjas(int ninjas){
		this.ninjas = ninjas;
	}

	public int getNinjas(){
		return this.ninjas;
	}

	public void setLeader(String leader){
		this.leader = leader;
	}

	public String getLeader(){
		return this.leader;
	}

	public void setBlood(boolean blood){
		this.blood = blood;
	}

	public boolean getBlood(){
		return this.blood;
	}
}