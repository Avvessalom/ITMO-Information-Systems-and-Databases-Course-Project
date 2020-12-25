package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import java.util.List;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Hidden_village")
public class Hidden_village extends StdModel{
	@Id
	@Column(name = "village_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@OneToMany(
	fetch = FetchType.EAGER,
	mappedBy = "clan",
	orphanRemoval = false
	)
	List<Ninja> ninjas;

	public static String StdModel(){
		return "Hidden_village";
	}
}
