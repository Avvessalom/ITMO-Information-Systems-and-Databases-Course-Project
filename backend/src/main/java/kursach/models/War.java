package com.kursach.models;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;

import com.kursach.models.StdModel;

@Data
@Entity
@Table(name = "War")
public class War extends StdModel{
	@Id
	@Column(name = "war_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "attacking_country")
	private long attacking_country;

	@Column(name = "defending_country")
	private long defending_country;

	@Column(name = "loss_of_attackers")
	private int loss_of_attackers;

	@Column(name = "start_date")
	private Date start_date;

	@Column(name = "end_date")
	private Date end_date;

	public static String StdModel(){
		return "War";
	}
}
