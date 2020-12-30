package com.salvoroni.narutopedia.DTOmodels;

public class AddCitizenDTO {
	private String name;
	private Long village;
	private int age;
	private String sex;
	private String status;

	public AddCitizenDTO() {}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setVillage(Long village){
		this.village = village;
	}

	public Long getVillage(){
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