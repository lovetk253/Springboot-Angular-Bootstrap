/**
 * 
 */
package com.minato.springboot.intf;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.minato.springboot.entity.Borrowing;

/**
 * @author Minato
 *
 */
@Repository
public interface BorrowingJpaRepository extends JpaRepository<Borrowing, Integer> {

}
