package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "biju")
public class Biju {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "biju_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "count_of_tails")
	private int count_of_tails;
}