package com.salvoroni.narutopedia.DTOmodels;

public class ChildrenParentDTO{
	private Long parent;
	private Long child;

	public ChildrenParentDTO(){}

	public void setParent(Long parent){
		this.parent = parent;
	}

	public Long getParent(){
		return this.parent;
	}

	public void setChild(Long child){
		this.child = child;
	}

	public Long getChild(){
		return this.child;
	}
}