/**
 * 
 */
package com.minato.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Minato
 *
 */
@Controller
public class AppController {

	@RequestMapping("/")
	String home(ModelMap modal) {
		modal.addAttribute("title", "Assignment First with AngularJS vs Bootstrap");
		System.out.println("This is Home");
		return "index";
	}

	@RequestMapping("/display/{page}")
	String partialHandler(@PathVariable("page") final String page) {
		return page;
	}

}