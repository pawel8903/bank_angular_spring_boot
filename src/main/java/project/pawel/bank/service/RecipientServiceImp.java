package project.pawel.bank.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.pawel.bank.entity.Recipient;
import project.pawel.bank.repository.RecipientRepository;

import java.util.List;

@Service
public class RecipientServiceImp implements RecipientService {

    @Autowired
    private RecipientRepository recipientRepository;

    @Override
    public List<Recipient> getRecipients() {
        return recipientRepository.findAll();
    }

    @Override
    public Recipient getRecipient(int id) {
        return recipientRepository.getById(id);
    }

    @Override
    public Recipient addRecipient(Recipient recipient) {
        return recipientRepository.save(recipient);
    }

    @Override
    public Recipient updateRecipient(Recipient recipient) {
        return recipientRepository.save(recipient);
    }

    @Override
    public void deleteRecipient(int id) {
        recipientRepository.deleteById(id);
    }
}
