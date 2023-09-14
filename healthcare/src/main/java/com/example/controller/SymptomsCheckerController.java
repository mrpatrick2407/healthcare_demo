package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SymptomsCheckerController {
	
	
	RestTemplate restTemplate;
	@GetMapping("/init-session")
    public String callExternalApi() {
		restTemplate= new RestTemplate();
        // Replace 'externalApiUrl' with the actual URL of the external API you want to call
        String externalApiUrl = "http://api-prod.endlessmedical.com/v1/dx/InitSession";

        // Make the external API call
        ResponseEntity<String> response = restTemplate.getForEntity(externalApiUrl, String.class);

        // You can handle the response and return it as needed
        return response.getBody();
    }
	@PostMapping("/update")
    public String update( @RequestParam("SessionID") String ses,
    	    @RequestParam("name") String name,
    	    @RequestParam("value") String value) {
		restTemplate= new RestTemplate();
        // Replace 'externalApiUrl' with the actual URL of the external API you want to call
        String externalApiUrl = "http://api-prod.endlessmedical.com/v1/dx/UpdateFeature?SessionID=".concat(ses).concat("&name=").concat(name).concat("&value=").concat(value);
        System.out.println(externalApiUrl);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(externalApiUrl)
                .queryParam("SessionID", ses)
                .queryParam("name", name)
                .queryParam("value", value);

        ResponseEntity<String> response = restTemplate.postForEntity(builder.toUriString(),null, String.class);
        // You can handle the response and return it as needed
        return response.getBody();
    }
	
	@PostMapping("/delete")
    public String delete( @RequestParam("SessionID") String ses,
    	    @RequestParam("name") String name) {
		restTemplate= new RestTemplate();
        // Replace 'externalApiUrl' with the actual URL of the external API you want to call
        String externalApiUrl = "http://api-prod.endlessmedical.com/v1/dx/DeleteFeature?SessionID=".concat(ses).concat("&name=").concat(name);
        System.out.println(externalApiUrl);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(externalApiUrl)
                .queryParam("SessionID", ses)
                .queryParam("name", name);
                

        ResponseEntity<String> response = restTemplate.postForEntity(builder.toUriString(),null, String.class);
        // You can handle the response and return it as needed
        return response.getBody();
    }
	@GetMapping("/analyze")
    public String analyze( @RequestParam("SessionID") String ses) {
		restTemplate= new RestTemplate();
        // Replace 'externalApiUrl' with the actual URL of the external API you want to call
        String externalApiUrl = "http://api-prod.endlessmedical.com/v1/dx/Analyze?SessionID=".concat(ses);
        System.out.println(externalApiUrl);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(externalApiUrl)
                .queryParam("SessionID", ses);
                

        ResponseEntity<String> response = restTemplate.getForEntity(builder.toUriString(), String.class);
        // You can handle the response and return it as needed
        return response.getBody();
    }
	
}
