/**
 * 
 */
package com.minato.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minato.springboot.entity.Book;
import com.minato.springboot.interfaceDao.IBook;

/**
 * @author Minato
 *
 */
@Service
public class BookService {

	@Autowired
	private IBook iBook;

	public Book getBookById(int id) {
		Book book = iBook.getBooksById(id);
		return book;
	}

	public List<Book> getAllBooks() {
		return iBook.getAllBooks();
	}

	public synchronized boolean addBooks(Book book) {
		if (iBook.booksExists(book.getNameBook())) {
			return false;
		}
		iBook.addBooks(book);
		return true;
	}

	public boolean updateBooks(Book book) {
		int bookCheck = book.getId();

		if (bookCheck == 0) {
			return false;
		}
		iBook.updateBooks(book);

		return true;
	}

	public boolean deleteBookById(int id) {
		Book book = iBook.getBooksById(id);
		
		if (book == null) {
			return false;
		}
		iBook.deleteBooksById(id);
		
		return true;
	}

	public boolean deleteAllBooks() {
		boolean check = iBook.deleteAllBooks();
		return check == true ? true : false;
	}
}
