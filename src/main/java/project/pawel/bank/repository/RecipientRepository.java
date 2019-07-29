package project.pawel.bank.repository;

import org.springframework.data.repository.Repository;
import project.pawel.bank.entity.Recipient;

import java.util.List;

public interface RecipientRepository extends Repository<Recipient,Integer> {
    List<Recipient> findAll();

    Recipient getById(int id);

    Recipient save(Recipient recipient);

    void deleteById(int id);
}
