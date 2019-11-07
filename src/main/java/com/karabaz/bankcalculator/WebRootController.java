package com.karabaz.bankcalculator;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebRootController {

    @RequestMapping("/")
    public String mainPage(){
        return "index";
    }
}
