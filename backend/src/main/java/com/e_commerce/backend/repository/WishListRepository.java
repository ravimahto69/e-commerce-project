package com.e_commerce.backend.repository;

import com.e_commerce.backend.entity.WishListItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishListRepository extends JpaRepository<WishListItem , Long> {
    List <WishListItem> findByUserId(Long userId);
}
