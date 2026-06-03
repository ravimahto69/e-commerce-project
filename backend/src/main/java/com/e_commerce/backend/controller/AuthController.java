package com.e_commerce.backend.controller;

import com.e_commerce.backend.dto.AuthResponse;
import com.e_commerce.backend.dto.LoginRequest;
import com.e_commerce.backend.dto.RegisterRequest;
import com.e_commerce.backend.service.AuthService;
import com.e_commerce.backend.dto.CurrentUserDto;
import org.springframework.security.core.Authentication;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request){
        return authService.register(request);
    }
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request.getEmail(), request.getPassword());
    }

    @GetMapping("/me")
    public CurrentUserDto currentUser(Authentication authentication) {
        if (authentication == null || authentication.getPrincipal() == null) return null;
        Object principal = authentication.getPrincipal();
        if (principal instanceof com.e_commerce.backend.entity.User) {
            com.e_commerce.backend.entity.User user = (com.e_commerce.backend.entity.User) principal;
            return new CurrentUserDto(user.getId(), user.getName(), user.getEmail());
        }
        return null;
    }
}
