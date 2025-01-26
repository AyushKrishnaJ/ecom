package com.example.CodeInitLoginBackend.Controller;

import com.example.CodeInitLoginBackend.Service.CartService;
import com.example.CodeInitLoginBackend.model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add/{cartId}/{productId}")
    public Cart addToCart(@PathVariable Long cartId, @PathVariable int productId) {
        return cartService.addToCart(cartId, productId);
    }

    @GetMapping("/view/{cartId}")
    public Cart viewCart(@PathVariable Long cartId) {
        return cartService.viewCart(cartId);
    }

    @DeleteMapping("/remove/{cartId}/{productId}")
    public Cart removeProductFromCart(@PathVariable Long cartId, @PathVariable int productId) {
        return cartService.removeProductFromCart(cartId, productId);
    }
}
