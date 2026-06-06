package com.e_commerce.backend.service;

import com.e_commerce.backend.entity.Cart;
import com.e_commerce.backend.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    public Cart addToCard(Cart cart) {
        return cartRepository.save(cart);
    }

    public List<Cart> getCart(Long userId) {
        return cartRepository.findByUserId(userId);
    }

     public void deleteCartItem(Long cartId) {
        cartRepository.deleteById(cartId);
    }
    public void clearCart(Long userId) {
        List<Cart> cartItems = cartRepository.findByUserId(userId);
        cartRepository.deleteAll(cartItems);
    }
    public Cart updateQuantity(
        Long cartId,
        Integer quantity
) {
    Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() ->
                    new RuntimeException("Cart item not found"));

    cart.setQuantity(quantity);

    return cartRepository.save(cart);
}
}
