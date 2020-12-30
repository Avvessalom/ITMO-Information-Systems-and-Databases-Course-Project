package com.salvoroni.narutopedia.model;

import java.util.Objects;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "country")
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "country_id")
	private Long id;

	private String name;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "hidden_village", referencedColumnName = "village_id")
	private Hidden_village village;

	@OneToMany(mappedBy = "country", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Country_lord> lords;

	@OneToMany(mappedBy = "attacking_country", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<War> attacking_country;

	@OneToMany(mappedBy = "defending_country", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<War> defending_country;

	@OneToMany(mappedBy = "territory", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Battle> battles;




	public Country(){}

	public void setBattles(Set<Battle> battles){
		this.battles = battles;
	}

	public Set<Battle> getBattles(){
		return this.battles;
	}

	public void setAttacking_country(Set<War> attacking_country){
		this.attacking_country = attacking_country;
	}

	public Set<War> getAttacking_country(){
		return this.attacking_country;
	}

	public void setDefending_country(Set<War> defending_country){
		this.defending_country = defending_country;
	}

	public Set<War> getDefending_country(){
		return this.defending_country;
	}

	public void setLords(Set<Country_lord> lords){
		this.lords = lords;
	}

	public Set<Country_lord> getLords(){
		return this.lords;
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

	public void setVillage(Hidden_village village){
		this.village = village;
	}

	public Hidden_village getVillage(){
		return this.village;
	}
}