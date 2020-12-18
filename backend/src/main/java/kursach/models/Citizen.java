package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Citizen")
public class Citizen extends StdModel{
	@Id
	@Column(name = "citizen_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "village")
	private long village;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "status")
	private String status;

	public static String getTableName(){
		return "Citizen";
	}
}
