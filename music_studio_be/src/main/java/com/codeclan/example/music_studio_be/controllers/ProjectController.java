package com.codeclan.example.music_studio_be.controllers;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.repositories.ProjectRepository;
import com.codeclan.example.music_studio_be.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    TagRepository tagRepository;

    @GetMapping(value = "/tag/{tagId}")
    public List<Project> findProjectsByTagsId(@PathVariable Long tagId){
        return projectRepository.findProjectsByTagsId(tagId);
    }

    @GetMapping(value = "/user/{userId}")
    public List<Project> findProjectsByUsersId(@PathVariable Long userId){
        return projectRepository.findProjectsByUsersId(userId);
    }
}
