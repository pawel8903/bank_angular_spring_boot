package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.pawel.bank.entity.Account;
import project.pawel.bank.service.AccountService;
import project.pawel.bank.tools.AccountNumberGenerator;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    private AccountNumberGenerator accountNumberGenerator = new AccountNumberGenerator();

    @GetMapping
    public List<Account> getAccounts(){
        return accountService.getAccounts();
    }

    @GetMapping("{id}")
    public Account getAccount(@PathVariable int id){
        return accountService.getAccount(id);
    }

    @PostMapping
    public Account addAccount(@RequestBody Account account){
        long accontNumber = 0;
        boolean exist = true;
        while(exist){
            accontNumber = accountNumberGenerator.getRandomNumber();
            exist = accountService.checkIfExist(accontNumber);
        }

        account.setId(0);
        account.setAccountNumber(accontNumber);
        return accountService.addAccount(account);
    }

    @PutMapping
    public Account updateAccount(@RequestBody Account account){
        return accountService.updateAccount(account);
    }
}
