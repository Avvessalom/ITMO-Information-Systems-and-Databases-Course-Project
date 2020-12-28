package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "technic")
public class Technic {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "technic_id")
	private Long id;

	@Column(name = "type")
	private Long type;

	@Column(name = "additional_type")
	private Long additional_type;

	@Column(name = "blood_restriction")
	private boolean blood_restriction;

	@Column(name = "rune_seals")
	private String rune_seals;

	@Column(name = "name")
	private String name;

	@Column(name = "rank")
	private Long rank;

	@ManyToMany(mappedBy = "technics")
	Set<Clan> clanRelative;



	public Technic(){}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}

	public void setType(Long type){
		this.type = type;
	}

	public Long getType(){
		return this.type;
	}

	public void setAdditional_type(Long additional_type){
		this.additional_type = additional_type;
	}

	public Long getAdditional_type(){
		return this.additional_type;
	}

	public void setBlood_restriction(boolean blood_restriction){
		this.blood_restriction = blood_restriction;
	}

	public boolean getBlood_restriction(){
		return this.blood_restriction;
	}

	public void setRune_seals(String rune_seals){
		this.rune_seals = rune_seals;
	}

	public String getRune_seals(){
		return this.rune_seals;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setRank(Long rank){
		this.rank = rank;
	}

	public Long getRank(){
		return this.rank;
	}

	public void setClanRelative(Set<Clan> clanRelative){
		this.clanRelative = clanRelative;
	}

	public Set<Clan> getClanRelative(){
		return this.clanRelative;
	}
}