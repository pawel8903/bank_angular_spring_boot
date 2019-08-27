package project.pawel.bank.repository;

import org.springframework.data.repository.Repository;
import project.pawel.bank.entity.Recipient;

import java.util.List;

public interface RecipientRepository extends Repository<Recipient,Integer> {
    List<Recipient> findByUserId(int userId);

    Recipient getById(int id);

    Recipient save(Recipient recipient);

    void deleteById(int id);
}
