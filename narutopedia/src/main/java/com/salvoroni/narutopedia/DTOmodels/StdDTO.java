package com.salvoroni.narutopedia.DTOmodels;

public class StdDTO {
	private Long id;
	private String name;

	public StdDTO(){}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}
}