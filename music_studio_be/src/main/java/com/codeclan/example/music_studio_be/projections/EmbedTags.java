package com.codeclan.example.music_studio_be.projections;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.Tag;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedTags", types = Tag.class)
public interface EmbedTags {
    Long getId();
    String getName();
    List<Project> getProjects();
}
