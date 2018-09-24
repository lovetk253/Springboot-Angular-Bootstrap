package com.minato.springboot.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author Minato
 *
 */
@Entity
public class Reader implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String address;

	private Date birthday;

	private String firstName;

	private String lastName;

	private String sex;

	@JsonIgnore
	@OneToMany(mappedBy = "reader", cascade = CascadeType.ALL)
	private Set<Borrowing> borrowings = new HashSet<>();

	public Reader() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getBirthday() {
		return this.birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSex() {
		return this.sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Set<Borrowing> getBorrowings() {
		return this.borrowings;
	}

	public void setBorrowings(Set<Borrowing> borrowings) {
		this.borrowings = borrowings;
	}

	public Borrowing addBorrowing(Borrowing borrowing) {
		getBorrowings().add(borrowing);
		borrowing.setReader(this);

		return borrowing;
	}

	public Borrowing removeBorrowing(Borrowing borrowing) {
		getBorrowings().remove(borrowing);
		borrowing.setReader(null);

		return borrowing;
	}

}