package com.example.gippokrat.SpecialFunctions;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtFunctions {
    private static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256); //Секретный ключ
    private static final long EXPIRATION_TIME = 86400000; //Время жизни токена

    //Генерация JWT
    public static String generateToken(String email){
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
                .signWith(SECRET_KEY)
                .compact();
    }

    //Проверка JWT
    public static String validateToken(String token){
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        }catch (ExpiredJwtException e){
            //Токен истек
            return "Токен истек";
        }catch (JwtException e){
            return "Некорректный токен";
        }
    }
}
