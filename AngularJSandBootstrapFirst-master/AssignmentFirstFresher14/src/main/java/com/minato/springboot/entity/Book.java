package com.minato.springboot.entity;

import java.io.Serializable;
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
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String nameBook;

	private String publisher;

	private int publishingYear;

	@JsonIgnore
	@OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
	private Set<Borrowing> borrowings = new HashSet<>();

	public Book() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNameBook() {
		return this.nameBook;
	}

	public void setNameBook(String nameBook) {
		this.nameBook = nameBook;
	}

	public String getPublisher() {
		return this.publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public int getPublishingYear() {
		return this.publishingYear;
	}

	public void setPublishingYear(int publishingYear) {
		this.publishingYear = publishingYear;
	}

	public Set<Borrowing> getBorrowings() {
		return this.borrowings;
	}

	public void setBorrowings(Set<Borrowing> borrowings) {
		this.borrowings = borrowings;
	}

	public Borrowing addBorrowing(Borrowing borrowing) {
		getBorrowings().add(borrowing);
		borrowing.setBook(this);

		return borrowing;
	}

	public Borrowing removeBorrowing(Borrowing borrowing) {
		getBorrowings().remove(borrowing);
		borrowing.setBook(null);

		return borrowing;
	}

}