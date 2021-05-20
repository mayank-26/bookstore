package com.mayank.bookstore.repository;

import com.mayank.bookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long>
{
}
