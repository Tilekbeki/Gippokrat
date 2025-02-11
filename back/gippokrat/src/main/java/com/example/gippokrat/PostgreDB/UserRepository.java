package com.example.gippokrat.PostgreDB;

import com.example.gippokrat.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Методы для кастомных запросов (если нужны)
    User findByEmail(String email);
}
