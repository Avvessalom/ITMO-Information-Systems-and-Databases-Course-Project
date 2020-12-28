package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;
import com.fasterxml.jackson.annotation.*;


@Entity
@Table(name = "hidden_village")
//@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
public class Hidden_village {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "village_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "village", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	//@Fetch(value=FetchMode.SELECT)
	private Set<Ninja> ninja;

	@OneToMany(mappedBy = "village", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Clan> clans;

	@OneToOne(mappedBy = "village")
	private Country country;








	public Hidden_village(){}

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