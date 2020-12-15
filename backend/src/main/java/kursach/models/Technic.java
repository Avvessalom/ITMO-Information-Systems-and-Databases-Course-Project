package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "Technic")
public class Technic{
	@Id
	@Column(name = "technic_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "type")
	private long type;

	@Column(name = "additional_type")
	private long additional_type;

	@Column(name = "blood_restriction")
	private boolean blood_restriction;

	@Column(name = "rune_seals")
	private String rune_seals;

	@Column(name = "name")
	private String name;

	@Column(name = "rank")
	private long rank;

}
