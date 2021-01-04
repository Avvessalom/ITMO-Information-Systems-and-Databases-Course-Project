package com.salvoroni.narutopedia.DTOmodels;

public class DestroyVillageDTO {
	private Long villageid;
	private Long destroyer;

	public DestroyVillageDTO(){}

	public void setDestroyer(Long destroyer){
		this.destroyer = destroyer;
	}

	public Long getDestroyer(){
		return this.destroyer;
	}

	public void setVillageid(Long villageid){
		this.villageid = villageid;
	}

	public Long getVillageid(){
		return this.villageid;
	}
}