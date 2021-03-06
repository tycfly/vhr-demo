package top.headfirst.vhr.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "你好";
    }

    @GetMapping("/employee/basic/hello")
    public String hello1(){
        return "/employee/basic/hello";
    }

    @GetMapping("/employee/advanced/hello")
    public String hello2(){
        return "/employee/advanced/hello";
    }
}
