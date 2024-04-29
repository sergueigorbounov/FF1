/*
package com.example.ff.repository;

import com.example.ff.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

*//*

*/
/**
 * Repository interface for {@link User} instances.
 * Provides basic CRUD operations due to the extension of {@link JpaRepository}.
 *//*
*/
/*

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    *//*

*/
/**
     * Finds a User by their username.
     * @param username the username to search for
     * @return an Optional containing the found user if available
     *//*
*/
/*

    Optional<User> findByUsername(String username);

    List<User> getAllUser();
}
*//*

package com.example.ff.repository;

import com.example.ff.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
*/
/*
package com.example.ff.repository;

import com.example.ff.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

*/
/*@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}*//*

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
}
*/
package com.example.ff.repository;

import com.example.ff.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
}
