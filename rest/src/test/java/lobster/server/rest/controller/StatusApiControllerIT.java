package lobster.server.rest.controller;

import lobster.server.rest.model.Lobster;
import lobster.server.rest.model.Status;
import org.junit.Before;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

/**
 * Created with IntelliJ IDEA.
 * User: Ferni
 * Date: 9/11/13
 * Time: 4:13
 * To change this template use File | Settings | File Templates.
 */
public class StatusApiControllerIT {

    private RestTemplate restTemplate;

    @Before
    public void restTemplate() {
        this.restTemplate = new RestTemplate();
        restTemplate.setMessageConverters(Collections.<HttpMessageConverter<?>>singletonList(new MappingJacksonHttpMessageConverter()));
    }

    @org.junit.Test
    public void get() {
        Integer lobsterId = 1;
       // ResponseEntity<Status> status;
        Status status = restTemplate.getForObject("http://localhost:8080/api/status/getStatus/{lobsterId}", Status.class, lobsterId);

        assertThat(status.getId(), is(1));
    }
}