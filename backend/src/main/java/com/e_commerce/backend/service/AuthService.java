package com.e_commerce.backend.service;


import com.e_commerce.backend.dto.AuthResponse;
import com.e_commerce.backend.dto.LoginRequest;
import com.e_commerce.backend.dto.RegisterRequest;
import com.e_commerce.backend.entity.User;
import com.e_commerce.backend.repository.UserRepository;
import com.e_commerce.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthResponse register(RegisterRequest request){
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
        return new AuthResponse(
                "Register successful",
                user.getName(),
                user.getEmail(),
                jwtUtil.generatedToken(user.getEmail())
        );
    }
    public AuthResponse login(String email ,String password){
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        boolean isPasswordMatch = passwordEncoder.matches(password, user.getPassword());
        if (!isPasswordMatch) {
            throw new RuntimeException("Invalid email or password");
        }
        return new AuthResponse(
                "Login successful",
                user.getName(),
                user.getEmail(),
                jwtUtil.generatedToken(user.getEmail())
        );
    }


}
