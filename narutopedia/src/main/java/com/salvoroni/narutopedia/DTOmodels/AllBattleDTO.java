package com.salvoroni.narutopedia.DTOmodels;

public class AllBattleDTO {
	private Long battle_id;
	private String territory;
	private int loss;
	private int duration;
	private String name;
	private String war;

	public AllBattleDTO(){}

	public void setBattle_id(Long battle_id){
		this.battle_id = battle_id;
	}

	public Long getBattle_id(){
		return this.battle_id;
	}

	public void setWar(String war){
		this.war = war;
	}

	public String getWar(){
		return this.war;
	}

	public void setTerritory(String territory){
		this.territory = territory;
	}

	public String getTerritory(){
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