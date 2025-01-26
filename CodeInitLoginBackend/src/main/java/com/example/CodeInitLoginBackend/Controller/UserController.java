package com.example.CodeInitLoginBackend.Controller;

import com.example.CodeInitLoginBackend.Service.UserService;
import com.example.CodeInitLoginBackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        boolean isValid = userService.validateUser(user.getEmail(), user.getPassword());
        if (isValid) {
            return "Login successful";
        } else {
            return "Invalid email or password";
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        // You can add validation here for duplicate email, etc.
        try {
            userService.registerUser(user); // Save user after hashing password
            return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED); // 201 Created
        } catch (Exception e) {
            return new ResponseEntity<>("Error registering user: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
