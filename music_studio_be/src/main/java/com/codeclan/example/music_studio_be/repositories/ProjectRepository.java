package com.codeclan.example.music_studio_be.repositories;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.projections.EmbedProjects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedProjects.class)
public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findProjectByUsersId(Long id);

    List<Project> findProjectByTagsId(Long id);

}
