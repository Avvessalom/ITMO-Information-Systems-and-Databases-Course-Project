package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "ninjas_rank")
public class Ninjas_rank {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rank_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@ManyToMany
	@JoinTable(
		name = "ranked_ninja",
		joinColumns = @JoinColumn(name = "rank_id"),
		inverseJoinColumns = @JoinColumn(name = "ninja_id")
	)
	private Set<Ninja> ninjas;



	public Ninjas_rank(){}

	public void setNinjas(Set<Ninja> ninjas){
		this.ninjas = ninjas;
	}

	public Set<Ninja> getNinjas(){
		return this.ninjas;
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
}