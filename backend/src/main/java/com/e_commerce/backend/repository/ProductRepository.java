package com.e_commerce.backend.repository;

import com.e_commerce.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product , Long> {
}
