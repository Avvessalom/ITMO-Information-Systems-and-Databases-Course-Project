package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Technic_rank")
public class Technic_rank extends StdModel{
	@Id
	@Column(name = "techrank_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	public static String StdModel(){
		return "Technic_rank";
	}
}
