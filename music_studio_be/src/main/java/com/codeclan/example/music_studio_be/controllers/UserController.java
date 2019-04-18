package com.codeclan.example.music_studio_be.controllers;

import com.codeclan.example.music_studio_be.models.User;
import com.codeclan.example.music_studio_be.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/username/{name}")
    public List<User> getUserByName(@PathVariable String name){
        return userRepository.findUserByUsername(name);
    }

}

