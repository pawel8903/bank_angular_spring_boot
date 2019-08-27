package project.pawel.bank.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.pawel.bank.entity.Account;
import project.pawel.bank.repository.AccountRepository;

import java.util.List;

@Service
public class AccountServiceImp implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Account getAccount(int id) {
        return accountRepository.getById(id);
    }

    @Override
    public Account addAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public List<Account> getAccounts(int userId) {
        return accountRepository.findByUserId(userId);
    }

    @Override
    public boolean checkIfExist(long accountNumber) {
        return accountRepository.existsByAccountNumber(accountNumber);
    }
}
