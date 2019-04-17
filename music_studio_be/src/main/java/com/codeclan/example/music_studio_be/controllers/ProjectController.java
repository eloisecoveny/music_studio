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

}
