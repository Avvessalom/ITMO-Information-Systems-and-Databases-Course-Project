package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "Biju")
public class Biju {
	@Id
	@Column(name = "biju_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "count_of_tails")
	private int count_of_tails;
}
