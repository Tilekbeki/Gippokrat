package com.example.gippokrat.postgreDB;

import com.example.gippokrat.model.users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<users, Long> {
    // Методы для кастомных запросов (если нужны)
    users findByEmail(String email);
}
