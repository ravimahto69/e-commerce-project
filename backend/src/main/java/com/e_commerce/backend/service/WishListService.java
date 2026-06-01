package com.e_commerce.backend.service;

import com.e_commerce.backend.entity.WishListItem;
import com.e_commerce.backend.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WishListService {
    private final WishListRepository wishListRepository;

    public WishListItem addToWishList(WishListItem wishListItem) {
        return wishListRepository.save(wishListItem);
    }
    public List<WishListItem> getWishList(Long userId) {
        return wishListRepository.findByUserId(userId);
    }
}
