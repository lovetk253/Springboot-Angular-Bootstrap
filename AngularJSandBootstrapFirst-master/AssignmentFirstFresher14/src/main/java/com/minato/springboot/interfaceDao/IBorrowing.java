/**
 * 
 */
package com.minato.springboot.interfaceDao;

import java.util.List;

import com.minato.springboot.entity.Borrowing;

/**
 * @author Minato
 *
 */
public interface IBorrowing {

	List<Borrowing> getAllBorrowing();

	Borrowing getBorrowingById(int id);

	int addBorrowing(Borrowing borrowing);

	boolean updateBorrowing(Borrowing borrowing);

	boolean deleteBorrowingById(int id);

	boolean deleteAllBorrowing();

}
