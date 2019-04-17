package com.codeclan.example.music_studio_be.projections;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.Sequence;
import com.codeclan.example.music_studio_be.models.Tag;
import com.codeclan.example.music_studio_be.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedProjects", types = Project.class)
public interface EmbedProjects {
    Long getId();
    String getName();
    User getUser();
    List<Sequence> getSequences();
    List<Tag> getTags();
}
