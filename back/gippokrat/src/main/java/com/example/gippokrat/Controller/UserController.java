package com.example.gippokrat.Controller;

import com.example.gippokrat.Model.User;
import com.example.gippokrat.PostgreDB.UserRepository;
import com.example.gippokrat.PostgreDB.UserServiceDB;
import com.example.gippokrat.SpecialFunctions.JwtFunctions;
import com.example.gippokrat.ValidationJson.AuthResponse;
import com.example.gippokrat.ValidationJson.UserRegistrationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserServiceDB dbFunctions;
    @Autowired
    private UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //Получение пользователей
    @GetMapping("/users")
    public List<User> findAllUsers(){
        return dbFunctions.getAllUsers();
    }

    //Создание пользователя
    @PostMapping("/register")
    public ResponseEntity<String>  registerUser(@RequestBody UserRegistrationRequest request){
        boolean check = dbFunctions.createUser(request.getUsername(), request.getPassword());
        if(check){
            return ResponseEntity.ok("Success");
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Пользователь уже существует");
        }
    }

    //Авторизация пользователя
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserRegistrationRequest request){
        User user = new User();
        //Выполняем поиск пользователя в базе по email
        user = userRepository.findByEmail(request.getUsername());
        if (user.getEmail() == null) {

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email не найден");
        }
        else {
            //Проверяем хэшированные пароли на идентичность
            if(passwordEncoder.matches(request.getPassword(), user.getPassword())){
                //Генерация JWT токена
                String token = JwtFunctions.generateToken(user.getEmail());
                //Засовываем токен в JSON
                AuthResponse response = new AuthResponse(token, "Авторизация прошла успешно!");
                return ResponseEntity.ok(response);
            }
            else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Неверный пароль");
            }
        }
    }

    //Удаление пользователя
    @PutMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestBody String jwt){
        String email = JwtFunctions.validateToken(jwt);
        try {
            userRepository.findByEmail(email);
            return ResponseEntity.ok(jwt);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
