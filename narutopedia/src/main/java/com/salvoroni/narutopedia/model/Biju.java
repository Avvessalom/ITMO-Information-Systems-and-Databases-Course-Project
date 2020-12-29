package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "biju")
public class Biju {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "biju_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "count_of_tails")
	private int count_of_tails;

	@ManyToMany
	@JoinTable(
		name = "jinchuriki",
		joinColumns = @JoinColumn(name = "biju"),
		inverseJoinColumns = @JoinColumn(name = "ninja_id")
	)
	private Set<Ninja> jinchuriki;



	public Biju(){}

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

	public void setCount_of_tails(int count_of_tails){
		this.count_of_tails = count_of_tails;
	}

	public int getCount_of_tails(){
		return this.count_of_tails;
	}

	public void setJinchuriki(Set<Ninja> jinchuriki){
		this.jinchuriki = jinchuriki;
	}

	public Set<Ninja> getJinchuriki(){
		return this.jinchuriki;
	}
}