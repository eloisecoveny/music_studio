package com.codeclan.example.music_studio_be.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonIgnoreProperties("projects")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_projects",
            joinColumns = {@JoinColumn(name = "project_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)}
    )
    private List<User> users;

    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
    private List<Sequence> sequences;

    @JsonIgnoreProperties("projects")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "projects_tags",
            joinColumns = {@JoinColumn(name = "project_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "tag_id", nullable = false, updatable = false)}
    )
    private List<Tag> tags;

    public Project(String name, User user){
        this.name = name;
        this.users = new ArrayList<User>();
        this.users.add(user);
        this.tags = new ArrayList<Tag>();
    }

    public Project() {
    }

    public void addTag(Tag tag){
        this.tags.add(tag);
    }

    public void addUser(User user){
        this.users.add(user);
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
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

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Sequence> getSequences() {
        return sequences;
    }

    public void setSequences(List<Sequence> sequences) {
        this.sequences = sequences;
    }
}
