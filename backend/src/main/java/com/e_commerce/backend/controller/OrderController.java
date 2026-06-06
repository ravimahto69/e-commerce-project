package com.e_commerce.backend.controller;

import com.e_commerce.backend.entity.Order;
import com.e_commerce.backend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
@CrossOrigin("*")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return orderService.placeOrder(order);
    }

    @GetMapping("/user/{userId}")
    public List<Order> getOrderByUser(@PathVariable Long userId){
        return orderService.getOrdersByUserId(userId);
    }
}
