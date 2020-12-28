package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ninjas_rank")
public class Ninjas_rank {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "rank_id")
	private Long id;

	@Column(name = "name")
	private String name;
}