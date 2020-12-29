package com.salvoroni.narutopedia.model;

import javax.persistence.*;

@Entity
@Table(name = "citizen")
public class Citizen {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "citizen_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "status")
	private String status;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "village")
	private Hidden_village village;



	public Citizen(){}

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

	public void setAge(int age){
		this.age = age;
	}

	public int getAge(){
		return this.age;
	}

	public void setSex(String sex){
		this.sex = sex;
	}

	public String getSex(){
		return this.sex;
	}

	public void setVillage(Hidden_village village){
		this.village = village;
	}

	public Hidden_village getVillage(){
		return this.village;
	}

	public void setStatus(String status){
		this.status = status;
	}

	public String getStatus(){
		return this.status;
	}
}