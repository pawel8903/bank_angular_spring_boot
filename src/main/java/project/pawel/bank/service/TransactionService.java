package project.pawel.bank.service;


import project.pawel.bank.entity.Transaction;

import java.util.List;

public interface TransactionService {
    List<Transaction> getTransactions(int account_id);

    Transaction getTransaction(int id);

    Transaction addTransaction(Transaction transaction);

    Transaction updateTransaction(Transaction transaction);

    void deleteTransaction(int id);
}
