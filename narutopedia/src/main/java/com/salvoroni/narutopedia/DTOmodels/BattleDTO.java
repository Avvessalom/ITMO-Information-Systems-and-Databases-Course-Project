package com.salvoroni.narutopedia.DTOmodels;

public class BattleDTO {
	private Long war_id;
	private Long territory;
	private int loss;
	private int duration;
	private String name;

	public BattleDTO(){}

	public void setWar_id(Long war_id){
		this.war_id = war_id;
	}

	public Long getWar_id(){
		return this.war_id;
	}

	public void setTerritory(Long territory){
		this.territory = territory;
	}

	public Long getTerritory(){
		return this.territory;
	}

	public void setLoss(int loss){
		this.loss = loss;
	}

	public int getLoss(){
		return this.loss;
	}

	public void setDuration(int duration){
		this.duration = duration;
	}

	public int getDuration(){
		return this.duration;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}
}