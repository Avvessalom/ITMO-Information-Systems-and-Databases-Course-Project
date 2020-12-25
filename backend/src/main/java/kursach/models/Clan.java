package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import java.util.List;
import java.util.ArrayList;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Clan")
public class Clan extends StdModel{
	@Id
	@Column(name = "clan_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "village")
	private long village;

	@Column(name = "prestige")
	private int prestige;

	//@OneToMany(
	//	fetch = FetchType.LAZY,
	//	mappedBy = "clan"
	//)
	//private List<Ninja> ninjas = new ArrayList<Ninja>();

	public static String getTableName(){
		return "Clan";
	}
}
