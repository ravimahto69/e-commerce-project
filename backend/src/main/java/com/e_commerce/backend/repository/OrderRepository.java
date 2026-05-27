package com.e_commerce.backend.repository;

import com.e_commerce.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
