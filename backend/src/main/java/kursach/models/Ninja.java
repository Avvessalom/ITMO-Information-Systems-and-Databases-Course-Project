package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "Ninja")
public class Ninja extends StdModel{
	@Id
	@Column(name = "ninja_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "village")
	private long village;

	@Column(name = "clan")
	private long clan;

	@Column(name = "status")
	private String status;

	public static String getTableName(){
		return "Ninja";
	}
}
