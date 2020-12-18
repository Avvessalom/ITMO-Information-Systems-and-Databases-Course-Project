package com.kursach.models;

import lombok.Data;
import javax.persistence.*;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "Additionat_type")
public class Additional_type extends StdModel{
	@Id
	@Column(name = "addtype_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	public static String getTableName(){
		return "Additional_type";
	}
}
