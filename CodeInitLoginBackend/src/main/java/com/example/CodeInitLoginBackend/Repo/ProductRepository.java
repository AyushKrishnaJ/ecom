package com.example.CodeInitLoginBackend.Repo;

import com.example.CodeInitLoginBackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
    @Query("Select p from Product p WHERE "+
            "lower(p.name) like lower(concat('%',:keyword,'%') ) or "+
            "lower(p.description) like lower(concat('%',:keyword,'%')) or "+
            "lower(p.brand) like lower(concat('%',:keyword,'%')) or "+
            "lower(p.category) like lower(concat('%',:keyword,'%'))"
    )
    List<Product> searchProduct(String keyword);
}
