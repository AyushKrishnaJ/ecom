package com.example.CodeInitLoginBackend.Service;

import com.example.CodeInitLoginBackend.Repo.UserRepo;

import com.example.CodeInitLoginBackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public boolean validateUser(String email, String password) {
        User user = userRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public User registerUser(User user) {

        if (userRepo.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email already exists");
        }


        return userRepo.save(user);
    }
}
