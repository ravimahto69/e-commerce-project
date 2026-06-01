package com.e_commerce.backend.controller;


import com.e_commerce.backend.entity.WishListItem;
import com.e_commerce.backend.service.WishListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wishlist")
@RequiredArgsConstructor
@CrossOrigin("*")
public class WishListController {
    private final WishListService wishListService;

    @PostMapping
    public WishListItem addToWishList( @RequestBody WishListItem wishListItem) {
        return wishListService.addToWishList(wishListItem);
    }

    @GetMapping("/{id}")
    public List<WishListItem> getWishList(@PathVariable Long id) {
        return wishListService.getWishList(id   );
    }
}
