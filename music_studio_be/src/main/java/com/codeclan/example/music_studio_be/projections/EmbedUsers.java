package com.codeclan.example.music_studio_be.projections;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedUsers", types = User.class)
public interface EmbedUsers {
    Long getId();
    String getUsername();
    List<Project> getProjects();
}
