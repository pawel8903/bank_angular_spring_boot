package project.pawel.bank.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;
import project.pawel.bank.entity.Transaction;

public interface TransactionRepository extends Repository<Transaction, Integer> {

    Transaction getById(int id);

    Transaction save(Transaction transaction);

    void deleteById(int id);

    List<Transaction> findByAccountId(int accountId, Pageable pageable);

    int countByAccountId(int accountId);
}
