package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "country_lord")
public class Country_lord {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "lord_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "status")
	private String status;

	@Column(name = "beginning_of_reign")
	private Date beginning_of_reign;

	@Column(name = "end_of_reign")
	private Date end_of_reign;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "country")
	private Country country;




	public Country_lord(){}

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

	public void setStatus(String status){
		this.status = status;
	}

	public String getStatus(){
		return this.status;
	}

	public void setBeginning_of_reign(Date beginning_of_reign){
		this.beginning_of_reign = beginning_of_reign;
	}

	public Date getBeginning_of_reign(){
		return this.beginning_of_reign;
	}

	public void setEnd_of_reign(Date end_of_reign){
		this.end_of_reign = end_of_reign;
	}

	public Date getEnd_of_reign(){
		return this.end_of_reign;
	}

	public void setCountry(Country country){
		this.country = country;
	}

	public Country getCountry(){
		return this.country;
	}
}