/**
 * 
 */
package com.minato.springboot.interfaceDao;

import java.util.List;

import com.minato.springboot.entity.Book;

/**
 * @author Minato
 *
 */
public interface IBook {

	List<Book> getAllBooks();

	Book getBooksById(int id);

	int addBooks(Book book);

	boolean updateBooks(Book book);

	boolean deleteBooksById(int id);

	boolean deleteAllBooks();

	boolean booksExists(String name);
}
