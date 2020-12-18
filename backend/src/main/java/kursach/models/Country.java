package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Country")
public class Country extends StdModel{
	@Id
	@Column(name = "country_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "country_lord")
	private long country_lord;

	@Column(name = "hidden_village")
	private long hidden_village;

	public static String getTableName(){
		return "Country";
	}
}
