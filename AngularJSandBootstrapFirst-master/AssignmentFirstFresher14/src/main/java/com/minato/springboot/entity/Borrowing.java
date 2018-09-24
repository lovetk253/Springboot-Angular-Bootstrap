package com.minato.springboot.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author Minato
 *
 */
@Entity
public class Borrowing implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idBorrowing;

	private Date borrowedDay;

	private Date reimbursedDay;

	@ManyToOne
	@JoinColumn(name = "Book_id")
	private Book book;

	@ManyToOne
	@JoinColumn(name = "Reader_id")
	private Reader reader;

	public Borrowing() {
	}

	public Borrowing(int idBorrowing, Date borrowedDay, Date reimbursedDay, Reader reader, Book book) {
		this.idBorrowing = idBorrowing;
		this.borrowedDay = borrowedDay;
		this.reimbursedDay = reimbursedDay;
		this.reader = reader;
		this.book = book;
	}

	public Borrowing(Date borrowedDay, Date reimbursedDay, Reader reader, Book book) {
		this.borrowedDay = borrowedDay;
		this.reimbursedDay = reimbursedDay;
		this.reader = reader;
		this.book = book;
	}

	public int getIdBorrowing() {
		return this.idBorrowing;
	}

	public void setIdBorrowing(int idBorrowing) {
		this.idBorrowing = idBorrowing;
	}

	public Date getBorrowedDay() {
		return this.borrowedDay;
	}

	public void setBorrowedDay(Date borrowedDay) {
		this.borrowedDay = borrowedDay;
	}

	public Date getReimbursedDay() {
		return this.reimbursedDay;
	}

	public void setReimbursedDay(Date reimbursedDay) {
		this.reimbursedDay = reimbursedDay;
	}

	public Book getBook() {
		return this.book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public Reader getReader() {
		return this.reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

}