package com.example.gippokrat.PostgreDB;

import com.example.gippokrat.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserServiceDB {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Метод для получения всех пользователей
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    // Метод для удаления пользователя
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }


    //Метод добавления пользователя
    public Boolean createUser(String email, String password){
        //Проверяем, существует ли пользователь
        if(userRepository.findByEmail(email)!= null){
            return false;
        }
        else{
            //Хэшируем пароль
            String passwordHash = passwordEncoder.encode(password);

            //Создаем пользователя
            User user = new User();
            user.setEmail(email);
            user.setPassword(passwordHash);
            userRepository.save(user);
            return true;
        }
    }
}
