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
		List<SearchResult> result = searchEJB.searchResult("nuno","Technic", "technic");
		result.addAll(searchEJB.searchResult("nuno","Technic","technic"));
		return result;
	}
}
