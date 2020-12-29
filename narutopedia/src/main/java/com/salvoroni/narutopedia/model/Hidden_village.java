package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;
import com.fasterxml.jackson.annotation.*;


@Entity
@Table(name = "hidden_village")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
public class Hidden_village {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "village_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "village", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Ninja> ninja;

	@OneToMany(mappedBy = "village", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Clan> clans;

	@OneToMany(mappedBy = "village", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Citizen> citizens;

	@OneToOne(mappedBy = "village")
	private Country country;

	@ManyToMany
	@JoinTable(
		name = "destroyed_village",
		joinColumns = @JoinColumn(name = "village_id"),
		inverseJoinColumns = @JoinColumn(name = "destroyer")
	)
	private Set<Ninja> destroyers;


	@Column(name = "quantity_of_destruction")
	private int quantity_of_destruction;







	public Hidden_village(){}

	public void setCitizens(Set<Citizen> citizens){
		this.citizens = citizens;
	}

	public Set<Citizen> getCitizens(){
		return this.citizens;
	}

	public void setQuantity_of_destruction(int quantity_of_destruction){
		this.quantity_of_destruction = quantity_of_destruction;
	}

	public int getQuantity_of_destruction(){
		return this.quantity_of_destruction;
	}

	public void setDestroyers(Set<Ninja> destroyers){
		this.destroyers = destroyers;
	}

	public Set<Ninja> getDestroyers(){
		return this.destroyers;
	}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setNinja(Set<Ninja> ninja) {
		this.ninja = ninja;
	}

	public Set<Ninja> getNinja() {
		return this.ninja;
	}

	public void setClans(Set<Clan> clans) {
		this.clans = clans;
	}

	public Set<Clan> getClans() {
		return this.clans;
	}

	public void setCountry(Country country){
		this.country = country;
	}

	public Country getCountry(){
		return this.country;
	}
}