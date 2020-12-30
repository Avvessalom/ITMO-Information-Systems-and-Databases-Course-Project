package com.salvoroni.narutopedia.DTOmodels;

import java.util.Date;

public class WarDTO{
	private Long id;
	private String name;
	private String attacking_country;
	private String defending_country;
	private int loss_of_attackers;
	private int loss_of_defenders;
	private Date start_date;
	private Date end_date;

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

	public void setLoss_of_attackers(int loss_of_attackers){
		this.loss_of_attackers = loss_of_attackers;
	}

	public int getLoss_of_attackers(){
		return this.loss_of_attackers;
	}

	public void setLoss_of_defenders(int loss_of_defenders){
		this.loss_of_defenders = loss_of_defenders;
	}

	public int getLoss_of_defenders(){
		return this.loss_of_defenders;
	}

	public void setStart_date(Date start_date){
		this.start_date = start_date;
	}

	public Date getStart_date(){
		return this.start_date;
	}

	public void setEnd_date(Date end_date){
		this.end_date = end_date;
	}

	public Date getEnd_date(){
		return this.end_date;
	}

	public void setAttacking_country(String attacking_country){
		this.attacking_country = attacking_country;
	}

	public String getAttacking_country(){
		return this.attacking_country;
	}

	public void setDefending_country(String defending_country){
		this.defending_country = defending_country;
	}

	public String getDefending_country(){
		return this.defending_country;
	}
}