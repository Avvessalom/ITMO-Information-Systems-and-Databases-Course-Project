package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "country_lord")
public class Country_lord {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "lord_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@Column(name = "status")
	private String status;

	@Column(name = "beginning_of_reign")
	private Date beginning_of_reign;

	@Column(name = "end_of_reign")
	private Date end_of_reign;
}