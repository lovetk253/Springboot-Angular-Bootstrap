/**
 * 
 */
package com.minato.springboot.intf;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.minato.springboot.entity.Book;

/**
 * @author Minato
 *
 */
@Repository
public interface BookJpaRepository extends JpaRepository<Book, Integer> {
	Book findByNameBook(String nameBook);
}
