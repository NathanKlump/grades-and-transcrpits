package edu.oakland.gradesAndTranscripts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ReactPageController {
  @Autowired
  public ReactPageController() {}

  @GetMapping("/ReactPage")
  public ModelAndView render() {
    ModelAndView modelAndView = new ModelAndView("ReactPage");
    return modelAndView;
  }
}
