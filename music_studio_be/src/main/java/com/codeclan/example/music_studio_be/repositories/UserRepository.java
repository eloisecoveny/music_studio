package com.codeclan.example.music_studio_be.repositories;

import com.codeclan.example.music_studio_be.models.User;
import com.codeclan.example.music_studio_be.projections.EmbedUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedUsers.class)
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findUserByUsername(String name);

}
