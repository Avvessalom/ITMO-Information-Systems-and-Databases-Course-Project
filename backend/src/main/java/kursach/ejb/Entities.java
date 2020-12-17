package com.kursach.ejb;

//import com.kursach.models.*;
import com.kursach.hibernate.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

import javax.ejb.Stateless;

@Stateless
public class Entities {
	public List<Object> getModel(){
		Session session = HibernateUtil
			.getSessionFactory()
			.openSession();
		session.beginTransaction();
		List<Object> result = session.createQuery(
				"from Ninja"
			)
			.list();
		session.getTransaction().commit();
		session.close();
		return result;
	}
}
