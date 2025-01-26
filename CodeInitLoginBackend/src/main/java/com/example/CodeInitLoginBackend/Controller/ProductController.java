package com.example.CodeInitLoginBackend.Controller;

import com.example.CodeInitLoginBackend.Service.ProductService;
import com.example.CodeInitLoginBackend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin
public class ProductController {
   @Autowired
   ProductService productService;

    @GetMapping("products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id){
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @GetMapping("product/{productId}/image")
    public ResponseEntity<byte[]> getProductImage(@PathVariable int productId){
        Product item = productService.getProductById(productId);
        return new ResponseEntity<>(item.imageData,HttpStatus.OK);
    }

    @PostMapping("/addProduct")
    public ResponseEntity<?> createProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile){

        try {
            Product product1 = productService.addProduct(product,imageFile);
            return new ResponseEntity<>(product1,HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/addProduct/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestPart Product product, @RequestPart MultipartFile imageFile){
        try {
            product.setId(id);
            Product updatedProduct = productService.updateProduct(product,imageFile);
            return new ResponseEntity<>("Updated product",HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        productService.deleteProduct(id);
        return new ResponseEntity<>("Deleted product",HttpStatus.OK);
    }

    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword){
        List<Product> products = productService.searchProduct(keyword);
        System.out.println(keyword);
        return new ResponseEntity<>(products,HttpStatus.OK);
    }
}
