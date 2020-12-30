package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import javax.persistence.Column;
import java.util.Set;

@Entity
@Table(name = "clan")
public class Clan {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "clan_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "prestige")
	private int prestige;

	@OneToMany(mappedBy = "clan", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Ninja> ninja;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "village")
	private Hidden_village village;

	@ManyToMany
	@JoinTable(
		name = "clan_leader",
		joinColumns = @JoinColumn(name = "clan_id"),
		inverseJoinColumns = @JoinColumn(name = "ninja_id")
	)
	private Set<Ninja> leaders;

	@ManyToMany
	@JoinTable(
		name = "blood_restriction_of_clan",
		joinColumns = @JoinColumn(name = "clan_id"),
		inverseJoinColumns = @JoinColumn(name = "technic_id")
	)
	private Set<Technic> technics;






	public Clan(){}

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

	public void setPrestige(int prestige){
		this.prestige = prestige;
	}

	public int getPrestige(){
		return this.prestige;
	}

	public void setNinja(Set<Ninja> ninja){
		this.ninja = ninja;
	}

	public Set<Ninja> getNinja(){
		return this.ninja;
	}

	public void setLeaders(Set<Ninja> leaders){
		this.leaders = leaders;
	}

	public Set<Ninja> getLeaders(){
		return this.leaders;
	}

	public void setTechnics(Set<Technic> technics){
		this.technics = technics;
	}

	public Set<Technic> getTechnics(){
		return this.technics;
	}
}