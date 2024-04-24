/*
package com.example.ff;
import ch.qos.logback.classic.encoder.JsonEncoder;
import ch.qos.logback.classic.spi.ILoggingEvent;
import com.example.ff.model.User;
import com.example.ff.repository.UserRepository;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration;

@SpringBootApplication(exclude = SpringApplicationAdminJmxAutoConfiguration.class)

@Configuration
//@SpringBootApplication
@ComponentScan(basePackages = {"com.example.ff.service","com.example.ff.repository"})
//@EntityScan(basePackages = {"com.example.ff.model"})
//@EnableJpaRepositories(basePackages = {"com.example.ff.repository"})
@SpringBootConfiguration
@EntityScan(basePackages = "com.example.ff.model")
@EnableJpaRepositories(basePackages = "com.example.ff.repository")

public class FfApplication {

    public static void main(String[] args) {
        //SpringApplication.run(FfApplication.class, args);

        ConfigurableApplicationContext context = SpringApplication.run(FfApplication.class, args);
        UserRepository repo = context.getBean(UserRepository.class);



//        List<User> users= repo.getAllUser();

//        users.forEach(System.out::println);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
*/
package com.example.ff;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EntityScan(basePackages = "com.example.ff.model")
@EnableJpaRepositories(basePackages = "com.example.ff.repository")
public class FfApplication {

    public static void main(String[] args) {
        SpringApplication.run(FfApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
