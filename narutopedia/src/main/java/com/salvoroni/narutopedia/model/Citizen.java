package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "citizen")
public class Citizen {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "citizen_id")
	private Long id;

	@Column(name = "village")
	private Long village;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "status")
	private String status;
}