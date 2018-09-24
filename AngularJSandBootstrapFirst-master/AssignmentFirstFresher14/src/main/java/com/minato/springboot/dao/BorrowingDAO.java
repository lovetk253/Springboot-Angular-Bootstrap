/**
 * 
 */
package com.minato.springboot.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.minato.springboot.entity.Borrowing;
import com.minato.springboot.interfaceDao.IBorrowing;
import com.minato.springboot.intf.BorrowingJpaRepository;

/**
 * @author Minato
 *
 */
@Transactional
@Repository
public class BorrowingDAO implements IBorrowing {

	@Autowired
	private BorrowingJpaRepository borrowingJpaRepository;

	@Override
	public List<Borrowing> getAllBorrowing() {
		return borrowingJpaRepository.findAll();
	}

	@Override
	public Borrowing getBorrowingById(int id) {
		return borrowingJpaRepository.findOne(id);
	}

	@Override
	public int addBorrowing(Borrowing borrowing) {
		borrowingJpaRepository.save(borrowing);
		return borrowing.getIdBorrowing();
	}

	@Override
	public boolean updateBorrowing(Borrowing borrowing) {

		if (borrowingJpaRepository.saveAndFlush(borrowing) == null) {
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteBorrowingById(int id) {

		Borrowing borrowing = borrowingJpaRepository.getOne(id);
		if (borrowing == null) {
			return false;
		}
		borrowingJpaRepository.delete(id);
		return true;
	}

	@Override
	public boolean deleteAllBorrowing() {
		borrowingJpaRepository.deleteAll();
		return borrowingJpaRepository.count() == 0 ? true : false;
	}

}
