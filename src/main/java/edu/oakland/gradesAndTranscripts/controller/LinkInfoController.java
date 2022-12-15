package edu.oakland.gradesAndTranscripts.controller;

import edu.oakland.gradesAndTranscripts.config.LinkInfoJsonConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;

public class LinkInfoController {
    private final LinkInfoJsonConfig linkInfoJsonConfig;

    @Autowired
    public LinkInfoController(LinkInfoJsonConfig linkInfoJsonConfig) {
        this.linkInfoJsonConfig = linkInfoJsonConfig;
    }

    @GetMapping("/Linkinfo")
    public String getlinkInfoJson() throws IOException {
        return linkInfoJsonConfig.LinkInfoJsonConfigPostConstruct();
    }
}
