package com.codeclan.example.music_studio_be.repositories;

import com.codeclan.example.music_studio_be.models.Tag;
import com.codeclan.example.music_studio_be.projections.EmbedTags;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedTags.class)
public interface TagRepository extends JpaRepository<Tag, Long> {
}
