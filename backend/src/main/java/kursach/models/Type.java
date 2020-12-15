package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "Type")
public class Type {
	@Id
	@Column(name = "type_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;
}
