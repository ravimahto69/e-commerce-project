package com.e_commerce.backend.controller;


import com.e_commerce.backend.entity.Cart;
import com.e_commerce.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CartController {
    private final CartService cartService;

    @PostMapping
    public Cart addToCart(@RequestBody  Cart cart) {
        return cartService.addToCard(cart);
    }

    @GetMapping("/{userId}")
    public List<Cart> getCart(@PathVariable Long userId) {
        return cartService.getCart(userId);
    }

    @DeleteMapping("/clear/{userId}")
    public String clearCart(@PathVariable Long userId) {
        cartService.clearCart(userId);
        return "Cart cleared";
    }

    @DeleteMapping("/{id}")
    public String removeCartItem(@PathVariable Long id) {
        cartService.deleteCartItem(id);
        return "Item removed from cart";
    }
}
