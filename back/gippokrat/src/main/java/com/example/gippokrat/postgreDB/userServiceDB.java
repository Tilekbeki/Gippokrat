package com.example.gippokrat.postgreDB;

import com.example.gippokrat.model.users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServiceDB {

    @Autowired
    private UserRepository userRepository;

    // Метод для получения всех пользователей
    public List<users> getAllUsers() {
        return userRepository.findAll();
    }

    // Метод для добавления пользователя
    public users addUser(users user) {
        return userRepository.save(user);
    }

    // Метод для удаления пользователя
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
