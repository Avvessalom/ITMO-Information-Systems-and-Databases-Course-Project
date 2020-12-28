package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "war")
public class War {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "war_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "attacking_country")
	private Long attacking_country;

	@Column(name = "defending_country")
	private Long defending_country;

	@Column(name = "loss_of_attackers")
	private int loss_of_attackers;

	@Column(name = "loss_of_defenders")
	private int loss_of_defenders;

	@Column(name = "start_date")
	private Date start_date;

	@Column(name = "end_date")
	private Date end_date;
}