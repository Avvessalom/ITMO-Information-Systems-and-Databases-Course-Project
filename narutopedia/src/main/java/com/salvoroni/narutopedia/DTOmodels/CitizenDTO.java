package com.salvoroni.narutopedia.DTOmodels;

public class CitizenDTO {
	private Long id;
	private String name;
	private String village;
	private int age;
	private String sex;
	private String status;

	public CitizenDTO() {}

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

	public void setVillage(String village){
		this.village = village;
	}

	public String getVillage(){
		return this.village;
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
}