package com.example.gippokrat.Model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "users", schema = "user_service_schema")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    @Column(nullable = false)
    private boolean status = true; // По умолчанию статус true

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String surname;

    @Column(name = "dateOfBirth")
    private java.sql.Date dateOfBirth;
}

