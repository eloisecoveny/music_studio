package com.codeclan.example.music_studio_be.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "sequences")
public class Sequence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonIgnoreProperties("sequences")
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @JsonIgnoreProperties("user")
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "audio", length = 1000000)
    private String audio;

    public Sequence(String name, Project project, User user, String audio){
        this.name = name;
        this.project = project;
        this.user = user;
        this.audio = audio;
    }

    public Sequence() {
    }

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
