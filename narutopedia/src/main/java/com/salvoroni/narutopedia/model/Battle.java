package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "battle")
public class Battle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "battle_id")
	private Long id;

	@Column(name = "loss")
	private int loss;

	@Column(name = "duration")
	private int duration;

	@Column(name = "name")
	private String name;

	@Column(name = "date_of_battle")
	private Date date_of_battle;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "war")
	private War war;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "territory")
	private Country territory;



	public Battle(){}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
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

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setDate_of_battle(Date date_of_battle){
		this.date_of_battle = date_of_battle;
	}

	public Date getDate_of_battle(){
		return this.date_of_battle;
	}

	public void setWar(War war){
		this.war = war;
	}

	public War getWar(){
		return this.war;
	}

	public void setTerritory(Country territory){
		this.territory = territory;
	}

	public Country getTerritory(){
		return this.territory;
	}
}