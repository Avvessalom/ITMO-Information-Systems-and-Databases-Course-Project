package com.kursach.models;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Country_lord")
public class Country_lord extends StdModel{
	@Id
	@Column(name = "lord_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

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

	public static String StdModel(){
		return "Country_lord";
	}
}
