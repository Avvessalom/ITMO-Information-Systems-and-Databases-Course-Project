package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "additional_type")
public class Additional_type {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "addtype_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "additional_type", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Technic> technic;



	public Additional_type(){}

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

	public void setTechnic(Set<Technic> technic){
		this.technic = technic;
	}

	public Set<Technic> getTechnic(){
		return this.technic;
	}
}