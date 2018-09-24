/**
 * 
 */
package com.minato.springboot.intf;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.minato.springboot.entity.Reader;

/**
 * @author Minato
 *
 */
@Repository
public interface ReaderJpaRepository extends JpaRepository<Reader, Integer> {

}
