package com.codeclan.example.music_studio_be;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.User;
import com.codeclan.example.music_studio_be.repositories.ProjectRepository;
import com.codeclan.example.music_studio_be.repositories.SequenceRepository;
import com.codeclan.example.music_studio_be.repositories.UserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MusicStudioBeApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Autowired
	ProjectRepository projectRepository;

	@Autowired
	SequenceRepository sequenceRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canGetAllUsers(){
		List<User> found = userRepository.findAll();
		assertEquals(3, found.size());
	}

	@Test
	public void canGetAllProjectsByTagId(){
		List<Project> found = projectRepository.findProjectByTagsId(1L);
		assertEquals(1, found.size());
	}

	@Test
	public void canGetAllProjectsByUserId(){
		List<Project> found = projectRepository.findProjectByUsersId(1L);
		assertEquals(1, found.size());
	}
//
//	@Test
//	public void givenFilePath_whenUsingFilesLines_thenFileData() {
//		Path path = Paths.get(getClass().getClassLoader().getResource("fileTest.txt").toURI());
//
//		Stream<Byte> lines = Files.lines(path);
//		String data = lines.collect(Collectors.joining("\n"));
//		lines.close();
//	}

}
