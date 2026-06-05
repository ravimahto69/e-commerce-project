package com.e_commerce.backend.controller;

import com.e_commerce.backend.entity.Product;
import com.e_commerce.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final ProductRepository productRepository;


    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        product.setCreatedAt(LocalDateTime.now());
        return productRepository.save(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Long id ,@RequestBody Product updateProduct){
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setName(updateProduct.getName());
        product.setPrice(updateProduct.getPrice());
        product.setDescription(updateProduct.getDescription());
        return productRepository.save(product);
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
        return "Product deleted successfully";
    }


}
