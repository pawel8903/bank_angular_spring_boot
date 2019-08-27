package project.pawel.bank.repository;

import org.springframework.data.repository.Repository;
import project.pawel.bank.entity.Account;

import java.util.List;

public interface AccountRepository extends Repository<Account,Long> {


    Account getById(int id);

    Account save(Account account);

    List<Account> findByUserId(int userId);

    boolean existsByAccountNumber(long accountNumber);
}
