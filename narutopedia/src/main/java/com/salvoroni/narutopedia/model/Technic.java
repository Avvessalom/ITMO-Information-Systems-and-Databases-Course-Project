package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "technic")
public class Technic {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "technic_id")
	private Long id;

	@Column(name = "blood_restriction")
	private boolean blood_restriction;

	@Column(name = "rune_seals")
	private String rune_seals;

	@Column(name = "name")
	private String name;

	@ManyToMany(mappedBy = "technics")
	Set<Clan> clanRelative;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "type")
	private Type type;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "additional_type")
	private Additional_type additional_type;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rank")
	private Technic_rank rank;



	public Technic(){}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}

	public void setType(Type type){
		this.type = type;
	}

	public Type getType(){
		return this.type;
	}

	public void setAdditional_type(Additional_type additional_type){
		this.additional_type = additional_type;
	}

	public Additional_type getAdditional_type(){
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

	public void setRank(Technic_rank rank){
		this.rank = rank;
	}

	public Technic_rank getRank(){
		return this.rank;
	}

	public void setClanRelative(Set<Clan> clanRelative){
		this.clanRelative = clanRelative;
	}

	public Set<Clan> getClanRelative(){
		return this.clanRelative;
	}
}