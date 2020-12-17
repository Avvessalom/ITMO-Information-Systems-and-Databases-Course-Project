package com.kursach;

import com.kursach.models.*;
import com.kursach.ejb.*;

import java.util.List;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

import javax.ejb.EJB;

@Path("/stdquery")
public class Main{
	@EJB
	Entities entities;

	@GET
	@Path("/ninjas")
	@Produces("application/json")
	public List<Ninja> getNinjas(){
		return (List<Ninja>)(Object)entities.getModel();
	}
}
