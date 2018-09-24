/**
 * 
 */
package com.minato.springboot.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.minato.springboot.entity.Book;
import com.minato.springboot.interfaceDao.IBook;
import com.minato.springboot.intf.BookJpaRepository;

/**
 * @author Minato
 *
 */
@Transactional
@Repository
public class BookDAO implements IBook {

	@Autowired
	private BookJpaRepository bookJpaRepository;

	@Override
	public List<Book> getAllBooks() {
		return bookJpaRepository.findAll();
	}

	@Override
	public Book getBooksById(int id) {
		return bookJpaRepository.findOne(id);
	}

	@Override
	public int addBooks(Book book) {
		bookJpaRepository.save(book);
		return book.getId();
	}

	@Override
	public boolean updateBooks(Book book) {

		if (bookJpaRepository.saveAndFlush(book) == null) {
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteBooksById(int id) {
		Book book = bookJpaRepository.findOne(id);
		if (book == null) {
			return false;
		}
		bookJpaRepository.delete(id);
		return true;
	}

	@Override
	public boolean deleteAllBooks() {
		bookJpaRepository.deleteAll();
		return bookJpaRepository.count() == 0 ? true : false;
	}

	@Override
	public boolean booksExists(String nameBook) {
		return bookJpaRepository.findByNameBook(nameBook) != null ? true : false;
	}

}
