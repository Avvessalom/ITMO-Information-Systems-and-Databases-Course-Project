package com.kursach.models;

import lombok.Data;

@Data
public class SearchResult {
	private long id;
	private String name;
	private String type;

	public SearchResult(long id, String name){
		this.id = id;
		this.name = name;
		this.type = "gay";
	}

	public SearchResult(long id, String name, String type){
		this.id = id;
		this.name = name;
		this.type = type;
	}
}
