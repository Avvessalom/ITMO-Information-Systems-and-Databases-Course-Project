package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "war")
public class War {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "war_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "loss_of_attackers")
	private int loss_of_attackers;

	@Column(name = "loss_of_defenders")
	private int loss_of_defenders;

	@Column(name = "start_date")
	private Date start_date;

	@Column(name = "end_date")
	private Date end_date;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "attacking_country")
	private Country attacking_country;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "defending_country")
	private Country defending_country;

	@OneToMany(mappedBy = "war", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Battle> battle;



	public War(){}

	public void setBattle(Set<Battle> battle){
		this.battle = battle;
	}

	public Set<Battle> getBattle(){
		return this.battle;
	}

	public void setAttacking_country(Country attacking_country){
		this.attacking_country = attacking_country;
	}

	public Country getAttacking_country(){
		return this.attacking_country;
	}

	public void setDefending_country(Country defending_country){
		this.defending_country = defending_country;
	}

	public Country getDefending_country(){
		return this.defending_country;
	}

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
}