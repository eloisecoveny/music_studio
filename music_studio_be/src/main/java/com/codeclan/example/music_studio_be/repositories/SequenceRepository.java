package com.codeclan.example.music_studio_be.repositories;

import com.codeclan.example.music_studio_be.models.Sequence;
import com.codeclan.example.music_studio_be.projections.EmbedSequences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedSequences.class)
public interface SequenceRepository extends JpaRepository<Sequence, Long> {
}
