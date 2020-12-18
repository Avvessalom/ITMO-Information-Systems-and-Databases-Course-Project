package com.kursach.ejb;

import com.kursach.models.StdModel;
import com.kursach.hibernate.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

import javax.ejb.Stateless;

@Stateless
public class Entities<Model extends StdModel> {
	public List<Model> getModel(){
		Session session = HibernateUtil
			.getSessionFactory()
			.openSession();
		session.beginTransaction();
		List<Model> result = session.createQuery("from "+Model.getTableName())
			.list();
		session.getTransaction().commit();
		session.close();
		return result;
	}
}
