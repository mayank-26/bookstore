package com.mayank.bookstore.repository;

import com.mayank.bookstore.entity.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel ="bookcategory",path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory,Long>
{
}
