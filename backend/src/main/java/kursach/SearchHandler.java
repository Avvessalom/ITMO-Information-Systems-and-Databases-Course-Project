package com.kursach;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import java.util.List;
import java.util.ArrayList;
import javax.ejb.EJB;
import com.kursach.models.Technic;
import com.kursach.models.SearchResult;
import com.kursach.ejb.SearchEJB;

@Path("/searchHandler")
public class SearchHandler {
	@EJB
	SearchEJB searchEJB;

	@GET
	@Path("/search")
	@Produces("application/json")
	public List<SearchResult> search(){
		String[] listOfEntities = new String[]{ "Country","Hidden_village","Clan","War","Battle","Ninja","Biju","Ninjas_rank","Technic","Type","Additional_type","Technic_rank","Citizen","Country_lord"};

		List<SearchResult> result = new ArrayList<SearchResult>();
		for (String table : listOfEntities){
			result.addAll(searchEJB.searchResult("nuno",table,table));
		}
		return result;
	}
}
