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

	@ManyToOne(cascade = CascadeType.ALL,
	fetch = FetchType.LAZY
	)
	@JoinColumn(name = "village")
	private Hidden_village village;
	public Hidden_village getVillage(){
		return this.village;
	}

	@ManyToOne(cascade = CascadeType.ALL,
	fetch = FetchType.LAZY
	)
	@JoinColumn(name = "clan")
	private Clan clan;
	public Clan getClan() {
		return this.clan;
	}
	//private Clan clan;

	@Column(name = "status")
	private String status;

	public static String getTableName(){
		return "Ninja";
	}
}
