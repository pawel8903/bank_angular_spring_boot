package project.pawel.bank.service;

import project.pawel.bank.entity.Recipient;

import java.util.List;

public interface RecipientService {
    List<Recipient> getRecipients();

    Recipient getRecipient(int id);

    Recipient addRecipient(Recipient recipient);

    Recipient updateRecipient(Recipient recipient);

    void deleteRecipient(int id);
}
