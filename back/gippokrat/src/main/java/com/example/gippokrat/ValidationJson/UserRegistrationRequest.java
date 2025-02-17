package com.example.gippokrat.ValidationJson;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.Date;

public class UserRegistrationRequest {

    @NotNull(message = "username является обязательным полем")
    private String username;
    @NotNull(message = "password является обязательным полем")
    @Size(min = 6, message = "Пароль не должен быть меньше 6 символов")
    private String password;

    private String name;
    private String surname;
    private Date dateOfBirth;

    //Геттеры и сеттеры
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
