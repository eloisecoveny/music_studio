package com.codeclan.example.music_studio_be.repositories;

import com.codeclan.example.music_studio_be.models.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
