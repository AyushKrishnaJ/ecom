package com.example.CodeInitLoginBackend.Service;

import com.example.CodeInitLoginBackend.Repo.CartRepo;
import com.example.CodeInitLoginBackend.Repo.ProductRepository;
import com.example.CodeInitLoginBackend.model.Cart;
import com.example.CodeInitLoginBackend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private ProductRepository productRepo;

    public Cart addToCart(Long cartId, int productId) {
        // Find the cart, or create a new one if it doesn't exist
        Cart cart = cartRepo.findById(cartId).orElse(new Cart());

        // Fetch the product to be added
        Product product = productRepo.findById(productId).orElseThrow(() ->
                new RuntimeException("Product not found"));

        // Add the product to the cart
        cart.getProducts().add(product);

        // Save the updated cart
        return cartRepo.save(cart);
    }

    public Cart viewCart(Long cartId) {
        // Retrieve the cart by ID
        return cartRepo.findById(cartId).orElseThrow(() ->
                new RuntimeException("Cart not found"));
    }

    public Cart removeProductFromCart(Long cartId, int productId) {
        // Retrieve the cart
        Cart cart = cartRepo.findById(cartId).orElseThrow(() ->
                new RuntimeException("Cart not found"));

        // Fetch the product to be removed
        Product product = productRepo.findById(productId).orElseThrow(() ->
                new RuntimeException("Product not found"));

        // Remove the product from the cart
        cart.getProducts().remove(product);

        // Save the updated cart
        return cartRepo.save(cart);
    }
}
