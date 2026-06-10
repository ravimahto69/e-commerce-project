package com.e_commerce.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// dto/CartResponse.java
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartResponse {
    private Long id;
    private Long userId;
    private Integer quantity;
    // Product details
    private Long productId;
    private String productName;
    private String productImage;
    private Double productPrice;
}
