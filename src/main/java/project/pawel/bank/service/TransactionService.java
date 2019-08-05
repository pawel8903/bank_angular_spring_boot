package project.pawel.bank.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import project.pawel.bank.entity.Transaction;

import java.util.List;

public interface TransactionService {

    List<Transaction> getTransactions(int accountId, Pageable pageable);

    Transaction getTransaction(int id);

    Transaction addTransaction(Transaction transaction);

    Transaction updateTransaction(Transaction transaction);

    void deleteTransaction(int id);

    int getPageNumber(int accountId);
}
