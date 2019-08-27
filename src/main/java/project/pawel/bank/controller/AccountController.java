package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.pawel.bank.entity.Account;
import project.pawel.bank.service.AccountService;
import project.pawel.bank.tools.AccountNumberGenerator;

import java.math.BigDecimal;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200","http://77.55.209.207:4200"})
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    private AccountNumberGenerator accountNumberGenerator = new AccountNumberGenerator();

    @GetMapping("/list/{userId}")
    public List<Account> getAccounts(@PathVariable int userId){
        return accountService.getAccounts(userId);
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
