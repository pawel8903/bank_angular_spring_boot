package project.pawel.bank.Controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import project.pawel.bank.controller.UserController;
import project.pawel.bank.entity.User;
import project.pawel.bank.service.UserService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserController.class, secure=false)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    User mockUser = new User(1,"test1234","test123","uniwersalna","09-332","Polska");

    String exampleUserJson = "{" +
            "\"id\":\"1\"," +
            "\"login\":\"test1234\"," +
            "\"street\":\"uniwersalna\"," +
            "\"zip\":\"09-332\"," +
            "\"town\":\"Polska\"" +
            "}";

    @Test
    public void RetrievieDetailsForUSer() throws Exception{
        Mockito.when(userService.getUser(Mockito.anyString())).thenReturn(mockUser);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/user").accept(MediaType.APPLICATION_JSON);

        MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();

        JSONAssert.assertEquals(exampleUserJson,mvcResult.getResponse().getContentAsString(),true);
    }
}
