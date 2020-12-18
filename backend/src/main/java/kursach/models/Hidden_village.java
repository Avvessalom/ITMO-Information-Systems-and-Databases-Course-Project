package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Hidden_village")
public class Hidden_village {
	@Id
	@Column(name = "village_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	public static String StdModel(){
		return "Hidden_village";
	}
}
