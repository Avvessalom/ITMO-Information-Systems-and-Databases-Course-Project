package com.salvoroni.narutopedia.model;

import javax.persistence.*;
import java.util.Set;

import com.fasterxml.jackson.annotation.*;

@Entity
@Table(name = "ninja")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
public class Ninja {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ninja_id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "age")
	private int age;

	@Column(name = "sex")
	private String sex;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "village")
	private Hidden_village village;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "clan")
	private Clan clan;

	@Column(name = "status")
	private String status;

	@ManyToMany(mappedBy = "leaders")
	Set<Clan> clanLeader;

	@ManyToMany(mappedBy = "destroyers")
	Set<Hidden_village> destroyerOf;

	@ManyToMany(mappedBy = "jinchuriki")
	Set<Biju> biju;

	@ManyToMany(mappedBy = "ninjas")
	Set<Ninjas_rank> ranks;







	public Ninja(){}

	public void setRanks(Set<Ninjas_rank> ranks){
		this.ranks = ranks;
	}

	public Set<Ninjas_rank> getRanks(){
		return this.ranks;
	}

	public void setBiju(Set<Biju> biju){
		this.biju = biju;
	}

	public Set<Biju> getBiju(){
		return this.biju;
	}

	public void setDestroyerOf(Set<Hidden_village> destroyerOf){
		this.destroyerOf = destroyerOf;
	}

	public Set<Hidden_village> getDestroyerOf(){
		return this.destroyerOf;
	}

	public void setClanLeader(Set<Clan> clanLeader){
		this.clanLeader = clanLeader;
	}

	public Set<Clan> getClanLeader(){
		return this.clanLeader;
	}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}

	public void setName(String name){
		this.name = name;
	}

	public String getName(){
		return this.name;
	}

	public void setAge(int age){
		this.age = age;
	}

	public int getAge(){
		return this.age;
	}

	public void setSex(String sex){
		this.sex = sex;
	}

	public String getSex(){
		return this.sex;
	}

	public void setVillage(Hidden_village village){
		this.village = village;
	}

	public Hidden_village getVillage(){
		return this.village;
	}

	public void setClan(Clan clan){
		this.clan = clan;
	}

	public Clan getClan(){
		return this.clan;
	}

	public void setStatus(String status){
		this.status = status;
	}

	public String getStatus(){
		return this.status;
	}

	//@Override
	//public String toString() {
	//	return "Ninja{" +
	//	"id=" + id +
	//	", name='" + name + '\'' +
	//	", age=" + age +
	//	", sex='" + sex + '\'' +
	//	", village='" + village.getName() + '\'' +
	//	", clan=" + clan +
	//	", status='" + status + '\'' +
	//	'}';
	//}
}