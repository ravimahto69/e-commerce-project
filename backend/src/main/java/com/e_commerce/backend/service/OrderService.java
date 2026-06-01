package com.e_commerce.backend.service;

import com.e_commerce.backend.entity.Order;
import com.e_commerce.backend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Order placeOrder(Order order) {
        // Here you can add any business logic related to placing an order
        return orderRepository.save(order);
    }
}
