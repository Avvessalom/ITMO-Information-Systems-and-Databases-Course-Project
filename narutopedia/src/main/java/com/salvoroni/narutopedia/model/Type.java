package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "type")
public class Type {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "type_id")
	private Long id;

	@Column(name = "name")
	private String name;
}