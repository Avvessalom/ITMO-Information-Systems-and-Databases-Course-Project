package com.kursach.ejb;

import com.kursach.models.StdModel;
import com.kursach.hibernate.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.criteria.*;
import javax.persistence.*;

@Stateless
public class Entities<Model extends StdModel> {
	
	public List<Model> getModelCriteria(Class<Model> type){
		Session session = HibernateUtil
			.getSessionFactory()
			.openSession();
		session.beginTransaction();

		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Model> cq = cb.createQuery(type);
		Root<Model> rootEntry = cq.from(type);
		CriteriaQuery<Model> all = cq.select(rootEntry);

		TypedQuery<Model> allQuery = session.createQuery(all);
		List<Model> result = allQuery.getResultList();

		session.getTransaction().commit();
		session.close();

		return result;
	}

	public void addEntity(Model entity){
		Session session = HibernateUtil
			.getSessionFactory()
			.openSession();
		session.beginTransaction();

		session.save(entity);
		
		session.getTransaction().commit();
		session.close();
	}
}
