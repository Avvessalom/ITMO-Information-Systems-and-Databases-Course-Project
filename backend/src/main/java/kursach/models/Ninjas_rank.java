package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Ninjas_rank")
public class Ninjas_rank extends StdModel{
	@Id
	@Column(name = "rank_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	public static String StdModel(){
		return "Ninjas_rank";
	}
}
