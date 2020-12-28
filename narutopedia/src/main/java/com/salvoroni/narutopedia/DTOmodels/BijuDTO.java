package com.salvoroni.narutopedia.DTOmodels;

import java.util.List;

public class BijuDTO {
	private Long id;
	private String name;
	private int tails;
	private List<String> jinchuuriki;

	public BijuDTO(){}

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

	public void setTails(int tails){
		this.tails = tails;
	}

	public int getTails(){
		return this.tails;
	}

	public void setJinchuuriki(List<String> jinchuuriki){
		this.jinchuuriki = jinchuuriki;
	}

	public List<String> getJinchuuriki(){
		return this.jinchuuriki;
	}
}