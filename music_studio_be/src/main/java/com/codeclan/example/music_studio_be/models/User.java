package com.codeclan.example.music_studio_be.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @JsonIgnoreProperties("users")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(name = "users_projects",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "project_id", nullable = false, updatable = false)}
    )
    private List<Project> projects;

    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Sequence> sequences;

    public User(String username){
        this.username = username;
        this.projects = new ArrayList<Project>();
        this.sequences = new ArrayList<Sequence>();
    }

    public User() {
    }


    public void addProject(Project project){
        this.projects.add(project);
    }

    public void addSequence(Sequence sequence){
        this.sequences.add(sequence);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public List<Sequence> getSequences() {
        return sequences;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void setSequences(List<Sequence> sequences) {
        this.sequences = sequences;
    }
}
