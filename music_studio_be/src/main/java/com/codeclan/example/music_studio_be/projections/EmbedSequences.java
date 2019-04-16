package com.codeclan.example.music_studio_be.projections;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.Sequence;
import com.codeclan.example.music_studio_be.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Blob;

@Projection(name = "embedSequences", types = Sequence.class)
public interface EmbedSequences {
    Long getId();
    String getName();
    User getUser();
    Project getProject();
    Blob getAudio();
}