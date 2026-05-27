package com.e_commerce.backend.service;


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

    public String register(RegisterRequest request){
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);
        return jwtUtil.generatedToken(user.getEmail());
    }
    public String login(String email ,String password){
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        boolean isPasswordMatch = passwordEncoder.matches(password, user.getPassword());
        if (!isPasswordMatch) {
            throw new RuntimeException("Invalid password");
        }
        return jwtUtil.generatedToken(user.getEmail());
    }

}
