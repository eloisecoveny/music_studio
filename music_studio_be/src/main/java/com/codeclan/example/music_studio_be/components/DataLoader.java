package com.codeclan.example.music_studio_be.components;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.Sequence;
import com.codeclan.example.music_studio_be.models.Tag;
import com.codeclan.example.music_studio_be.models.User;
import com.codeclan.example.music_studio_be.repositories.ProjectRepository;
import com.codeclan.example.music_studio_be.repositories.SequenceRepository;
import com.codeclan.example.music_studio_be.repositories.TagRepository;
import com.codeclan.example.music_studio_be.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    SequenceRepository sequenceRepository;

    @Autowired
    TagRepository tagRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        User user1 = new User("eloisec");
        userRepository.save(user1);

        User user2 = new User("jamesd");
        userRepository.save(user2);

        User user3 = new User("robertt");
        userRepository.save(user3);

        Project project1 = new Project("Horror Studio", user1);
        projectRepository.save(project1);

        Project project2 = new Project("Summertime", user2);
        projectRepository.save(project2);

        Project project3 = new Project("Test project", user3);
        projectRepository.save(project3);

        Tag jazz = new Tag("jazz");
        tagRepository.save(jazz);
        project1.addTag(jazz);
        projectRepository.save(project1);
    }

}
