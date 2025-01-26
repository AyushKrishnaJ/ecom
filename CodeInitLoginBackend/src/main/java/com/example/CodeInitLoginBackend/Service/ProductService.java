package com.example.CodeInitLoginBackend.Service;

import com.example.CodeInitLoginBackend.Repo.ProductRepository;
import com.example.CodeInitLoginBackend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        return productRepository.findById(id).get();
    }

    public Product addProduct(Product addproduct, MultipartFile imageFile) throws IOException {
        addproduct.setImageType(imageFile.getContentType());
        addproduct.setImageName(imageFile.getOriginalFilename());
        addproduct.setImageData(imageFile.getBytes());
        return productRepository.save(addproduct);
    }

    public Product updateProduct(Product updateproduct, MultipartFile imageFile) throws IOException {
        // Fetch the existing product from the database
        Product existingProduct = productRepository.findById(updateproduct.getId())
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + updateproduct.getId()));

        // Log the fetched product ID and incoming data
        System.out.println("Updating Product ID: " + existingProduct.getId());
        System.out.println("Incoming Product ID: " + updateproduct.getId());

        // Update the fields of the existing product
        existingProduct.setName(updateproduct.getName());
        existingProduct.setDescription(updateproduct.getDescription());
        existingProduct.setBrand(updateproduct.getBrand());
        existingProduct.setPrice(updateproduct.getPrice());
        existingProduct.setCategory(updateproduct.getCategory());
        existingProduct.setReleaseDate(updateproduct.getReleaseDate());
        existingProduct.setProductAvailable(updateproduct.getProductAvailable());
        existingProduct.setStockQuantity(updateproduct.getStockQuantity());

        // Update image if provided
        if (imageFile != null && !imageFile.isEmpty()) {
            existingProduct.setImageType(imageFile.getContentType());
            existingProduct.setImageName(imageFile.getOriginalFilename());
            existingProduct.setImageData(imageFile.getBytes());
        }

        // Save and return the updated product
        return productRepository.save(existingProduct);
    }



    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public List<Product> searchProduct(String keyword) {
        return productRepository.searchProduct(keyword);
    }
}
