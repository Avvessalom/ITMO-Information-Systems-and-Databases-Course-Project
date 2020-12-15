package com.kursach.models;

import lombok.Data;
import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Battle")
public class Battle {
	@Id
	@Column(name = "battle_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "war")
	private long war;

	@Column(name = "territory")
	private long territory;

	@Column(name = "loss")
	private int loss;

	@Column(name = "duration")
	private int duration;

	@Column(name = "name")
	private String name;

	@Column(name = "date_of_battle")
	//@Temporal(TemporalType.TIMESTAMP)
	private Date date_of_battle;
}
