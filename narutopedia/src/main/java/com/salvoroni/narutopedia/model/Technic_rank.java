package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "technic_rank")
public class Technic_rank {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "techrank_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "rank", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Technic> technic;



	public Technic_rank(){}

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