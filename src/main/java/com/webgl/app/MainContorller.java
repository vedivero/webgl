package com.webgl.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainContorller {

    @GetMapping("/")
    public String home() {
        return "index";
    }

}