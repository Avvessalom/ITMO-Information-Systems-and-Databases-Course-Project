package com.salvoroni.narutopedia.model;

import java.util.Objects;
import javax.persistence.*;

@Entity
@Table(name = "country")
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "country_id")
	private Long id;

	private String name;

	private Long country_lord;

	//private Long hidden_village;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "hidden_village", referencedColumnName = "village_id")
	private Hidden_village village;




	public Country(){}

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

	public void setCountry_lord(Long country_lord){
		this.country_lord = country_lord;
	}

	public Long getCountry_lord(){
		return this.country_lord;
	}

	public void setVillage(Hidden_village village){
		this.village = village;
	}

	public Hidden_village getVillage(){
		return this.village;
	}
}