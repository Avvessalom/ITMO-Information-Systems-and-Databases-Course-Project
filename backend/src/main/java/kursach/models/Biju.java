package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Biju")
public class Biju extends StdModel{
	@Id
	@Column(name = "biju_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "count_of_tails")
	private int count_of_tails;

	public static String getTableName(){
		return "Biju";
	}
}
