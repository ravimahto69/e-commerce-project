package com.e_commerce.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;
        @Column(name = "user_id")
        private Long userId;
        @Column(name = "total_amount")
        private Double totalAmount;
        @Column(name = "customer_name")
        private String customerName;
        private String address;
        @Column(name = "phone")
        private String phoneNumber;
        private String status = "PLACED";
}
