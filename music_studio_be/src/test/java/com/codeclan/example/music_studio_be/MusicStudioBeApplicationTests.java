package com.codeclan.example.music_studio_be;

import com.codeclan.example.music_studio_be.models.Project;
import com.codeclan.example.music_studio_be.models.User;
import com.codeclan.example.music_studio_be.repositories.ProjectRepository;
import com.codeclan.example.music_studio_be.repositories.SequenceRepository;
import com.codeclan.example.music_studio_be.repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

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

//	@Test
//	public void canGetUserById(){
//		User found = userRepository.findById(1L);
//		assertEquals("eloisec", found.getUsername());
//	}

}