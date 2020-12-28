package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "additional_type")
public class Additional_type {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "addtype_id")
	private Long id;

	@Column(name = "name")
	private String name;
}