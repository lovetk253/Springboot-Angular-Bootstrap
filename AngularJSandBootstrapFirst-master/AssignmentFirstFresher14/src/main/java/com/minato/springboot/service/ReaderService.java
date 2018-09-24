/**
 * 
 */
package com.minato.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minato.springboot.entity.Reader;
import com.minato.springboot.interfaceDao.IReader;

/**
 * @author Minato
 *
 */
@Service
public class ReaderService {

	@Autowired
	private IReader iReader;

	public Reader getReaderById(int id) {
		Reader reader = iReader.getReadersById(id);
		return reader;
	}

	public List<Reader> getAllReaders() {
		return iReader.getAllReaders();
	}

	public int addReader(Reader reader) {
		iReader.addReaders(reader);
		return reader.getId();
	}

	public boolean updateReader(Reader reader) {
		int readerCheck = reader.getId();

		if (readerCheck == 0) {
			return false;
		}
		iReader.updateReaders(reader);

		return true;
	}

	public boolean deleteReaderById(int id) {
		Reader reader = iReader.getReadersById(id);
		if (reader == null) {
			return false;
		}
		iReader.deleteReadersById(id);

		return true;
	}

	public boolean deleteAllReader() {
		boolean check = iReader.deleteAllReaders();
		return check == true ? true : false;
	}
}
