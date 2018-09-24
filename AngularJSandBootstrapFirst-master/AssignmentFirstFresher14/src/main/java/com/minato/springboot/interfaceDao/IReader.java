/**
 * 
 */
package com.minato.springboot.interfaceDao;

import java.util.List;

import com.minato.springboot.entity.Reader;

/**
 * @author Minato
 *
 */
public interface IReader {

	List<Reader> getAllReaders();

	Reader getReadersById(int id);

	int addReaders(Reader reader);

	boolean updateReaders(Reader reader);

	boolean deleteReadersById(int id);

	boolean deleteAllReaders();
}
