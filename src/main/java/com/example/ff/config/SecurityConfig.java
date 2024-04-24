


package com.example.ff.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
//              .csrf().disable()
                .authorizeHttpRequests((auth) -> auth
                                .requestMatchers("/simulation/**").permitAll()
                        // further configuration, for example:
                        // .anyRequest().authenticated()
                )
        // ... further method calls ...
        ;
        return http.build();
    }
}
