package project.pawel.bank.service;

import project.pawel.bank.entity.Account;

import java.util.List;

public interface AccountService {
    Account getAccount(int id);

    Account addAccount(Account account);

    Account updateAccount(Account account);

    List<Account> getAccounts();

    boolean checkIfExist(long accontNumber);
}
