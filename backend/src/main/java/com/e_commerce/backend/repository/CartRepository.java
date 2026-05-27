package com.e_commerce.backend.repository;

import com.e_commerce.backend.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
