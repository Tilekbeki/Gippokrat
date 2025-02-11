package com.example.gippokrat.ValidationJson;

public class AuthResponse {
    private String token;
    private String message;

    //Конструктор
    public AuthResponse(String token, String message){
        this.token = token;
        this.message = message;
    }

    //Геттеры и сеттеры
    public String getToken(){
        return token;
    }
    public void setToken(String token){
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

}
