package com.e_commerce.backend.controller;

import com.e_commerce.backend.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException exception) {
        String message = exception.getMessage();
        HttpStatus status = "Email already exists".equals(message)
                ? HttpStatus.CONFLICT
                : HttpStatus.UNAUTHORIZED;

        return ResponseEntity.status(status).body(new ErrorResponse(message));
    }
}