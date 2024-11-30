package com.example.gippokrat.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@Builder
@Entity
@Table(name = "users", schema = "user_service")
public class users {
    @Id
    private int id;
    private String email;
    private String password;
    public users(){}
    public users(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}
