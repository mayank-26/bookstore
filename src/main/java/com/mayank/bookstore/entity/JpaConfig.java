package com.mayank.bookstore.entity;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
public class JpaConfig
{
    @Bean(name = "mySqlDataSource")
    @Primary
    public DataSource mySqlDataSource() {
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.url("jdbc:mysql://localhost:3306/online_book_store");
        dataSourceBuilder.username("root");
        dataSourceBuilder.password("tyler1111");
        return dataSourceBuilder.build();
    }




}
