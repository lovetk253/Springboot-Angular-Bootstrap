/**
 * 
 */
package com.minato.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minato.springboot.entity.Borrowing;
import com.minato.springboot.interfaceDao.IBorrowing;

/**
 * @author Minato
 *
 */
@Service
public class BorrowingService {

	@Autowired
	private IBorrowing iBorrowing;

	public Borrowing getBorrowingById(int id) {
		Borrowing borrowing = iBorrowing.getBorrowingById(id);
		return borrowing;
	}

	public List<Borrowing> getAllBorrowing() {
		return iBorrowing.getAllBorrowing();
	}

	public int addBorrowing(Borrowing borrowing) {
		iBorrowing.addBorrowing(borrowing);
		return borrowing.getIdBorrowing();
	}

	public boolean updateBorrowing(Borrowing borrowing) {
		int borrowingCheck = borrowing.getIdBorrowing();

		if (borrowingCheck == 0) {
			return false;
		}
		iBorrowing.updateBorrowing(borrowing);

		return true;
	}

	public boolean deleteBorrowingById(int id) {
		Borrowing borrowing = iBorrowing.getBorrowingById(id);
		if (borrowing == null) {
			return false;
		}
		iBorrowing.deleteBorrowingById(id);

		return true;
	}

	public boolean deleteAllBorrowing() {
		boolean check = iBorrowing.deleteAllBorrowing();
		return check == true ? true : false;
	}
}
