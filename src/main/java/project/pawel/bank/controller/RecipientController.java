package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.pawel.bank.entity.Recipient;
import project.pawel.bank.service.RecipientService;

import java.util.List;

@RestController
@RequestMapping("recipient")
public class RecipientController {

    @Autowired
    private RecipientService recipientService;

    @GetMapping
    public List<Recipient> getRecipients(){
        return recipientService.getRecipients();
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
