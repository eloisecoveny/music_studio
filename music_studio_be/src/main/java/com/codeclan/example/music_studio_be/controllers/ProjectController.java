package com.codeclan.example.music_studio_be.controllers;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @GetMapping(value = "/tag/{tagId}")
    public List<Project> findProjectByTagsId(@PathVariable Long tagId){
        return projectRepository.findProjectByTagsId(tagId);
    }

    @GetMapping(value = "/user/{userId}")
    public List<Project> findProjectByUsersId(@PathVariable Long userId){
        return projectRepository.findProjectByUsersId(userId);
    }
}
