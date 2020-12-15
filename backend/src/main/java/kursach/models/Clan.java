package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "Clan")
public class Clan {
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
}
