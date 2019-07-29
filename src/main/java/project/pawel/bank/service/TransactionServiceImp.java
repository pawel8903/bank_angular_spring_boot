package project.pawel.bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.pawel.bank.entity.Transaction;
import project.pawel.bank.repository.TransactionRepository;
import project.pawel.bank.service.TransactionService;

import java.util.List;

@Service
public class TransactionServiceImp implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<Transaction> getTransactions(int accountId) {
        return transactionRepository.findByAccountId(accountId);
    }

    @Override
    public Transaction getTransaction(int id) {
        return transactionRepository.getById(id);
    }

    @Override
    public Transaction addTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction updateTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransaction(int id) {
        transactionRepository.deleteById(id);
    }
}
