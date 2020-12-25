package com.kursach.ejb;

import com.kursach.hibernate.HibernateUtil;
import com.kursach.models.Technic;
import com.kursach.models.SearchResult;
import org.hibernate.*;
import java.util.List;
import java.util.ArrayList;
import javax.ejb.Stateless;

@Stateless
public class SearchEJB{
	public List<SearchResult> searchResult(String word, String table, String type){
		Session session = HibernateUtil
			.getSessionFactory()
			.openSession();
		session.beginTransaction();

		List<SearchResult> result = session.createQuery(
//"select new SearchResult(technic_id, name, name) from (select *, word_similarity('nuno', name) as sim from technic) as result where result.sim > 0.5 order by result.sim desc"
				"select new com.kursach.models.SearchResult(t.id, t.name, '"+type+"') from "+table+" t where word_similarity(:word, name) > 0.5")
			.setParameter("word", "'"+word+"'")
			.list();

		session.getTransaction().commit();
		session.close();
		return result;
	}
}
