/**
 * 
 */
package com.minato.springboot.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.minato.springboot.entity.Reader;
import com.minato.springboot.interfaceDao.IReader;
import com.minato.springboot.intf.ReaderJpaRepository;

/**
 * @author Minato
 *
 */
@Transactional
@Repository
public class ReaderDAO implements IReader {

	@Autowired
	private ReaderJpaRepository readerJpaRepository;

	@Override
	public List<Reader> getAllReaders() {
		return readerJpaRepository.findAll();
	}

	@Override
	public Reader getReadersById(int id) {
		return readerJpaRepository.findOne(id);
	}

	@Override
	public int addReaders(Reader reader) {
		readerJpaRepository.save(reader);
		return reader.getId();
	}

	@Override
	public boolean updateReaders(Reader reader) {

		if (readerJpaRepository.saveAndFlush(reader) == null) {
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteReadersById(int id) {
		Reader reader = readerJpaRepository.findOne(id);
		if (reader == null) {
			return false;
		}

		readerJpaRepository.delete(id);
		return true;
	}

	@Override
	public boolean deleteAllReaders() {
		readerJpaRepository.deleteAll();
		return readerJpaRepository.count() == 0 ? true : false;
	}

}
