package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.pawel.bank.entity.Recipient;
import project.pawel.bank.service.RecipientService;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200","http://77.55.209.207:4200"})
@RestController
@RequestMapping("recipient")
public class RecipientController {

    @Autowired
    private RecipientService recipientService;

    @GetMapping("/list/{userId}")
    public List<Recipient> getRecipients(@PathVariable int userId){
        return recipientService.getRecipients(userId);
    }

    @GetMapping("{id}")
    public Recipient getRecipient(@PathVariable int id){
        return recipientService.getRecipient(id);
    }

    @PostMapping
    public Recipient addRecipient(@RequestBody Recipient recipient){
        recipient.setId(0);
        return recipientService.addRecipient(recipient);
    }

    @PutMapping
    public Recipient updateRecipient(@RequestBody Recipient recipient){
        return recipientService.updateRecipient(recipient);
    }

    @DeleteMapping("{id}")
    public String deleteRecipient(@PathVariable int id){
        recipientService.deleteRecipient(id);

        return "Recipient delete";
    }
}
