package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "battle")
public class Battle {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "battle_id")
	private Long id;

	@Column(name = "war")
	private Long war;

	@Column(name = "territory")
	private Long territory;

	@Column(name = "loss")
	private int loss;

	@Column(name = "duration")
	private int duration;

	@Column(name = "name")
	private String name;

	@Column(name = "date_of_battle")
	private Date date_of_battle;
}