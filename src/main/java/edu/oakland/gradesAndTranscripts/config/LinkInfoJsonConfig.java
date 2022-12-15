package edu.oakland.gradesAndTranscripts.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Configuration
public class LinkInfoJsonConfig {
    @Value("${oakland.link-info-json.path}")
    public String linkInfoJsonPath;

    public String linkInfoJson;

    @PostConstruct
    public String LinkInfoJsonConfigPostConstruct() throws IOException {
        linkInfoJson = readLinkInfoJson(linkInfoJsonPath);
        return linkInfoJson;
    }

    private String readLinkInfoJson(String filepath) throws IOException {
        return Files.readString(Paths.get(filepath));
    }
}
