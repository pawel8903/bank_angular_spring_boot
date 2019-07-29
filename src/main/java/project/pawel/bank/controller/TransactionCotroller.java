package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.pawel.bank.entity.Account;
import project.pawel.bank.entity.Transaction;
import project.pawel.bank.service.AccountService;
import project.pawel.bank.service.TransactionService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("transaction")
public class TransactionCotroller {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private AccountService accountService;

    @GetMapping("/transactions/{account_id}")
    public List<Transaction> getTransactions(@PathVariable int account_id){
        return transactionService.getTransactions(account_id);
    }

    @GetMapping("{id}")
    public Transaction getTransaction(@PathVariable int id){
        return transactionService.getTransaction(id);
    }

    @PostMapping
    public String addTransaction(@RequestBody Transaction transaction){
        transaction.setId(0);
        transaction.setDateTime(LocalDateTime.now());
        Account account = accountService.getAccount(transaction.getAccountId());

        double amountAfterTransaction = account.getAmount() - transaction.getAmount();
        if(amountAfterTransaction<0){
            return "Transaction aborted. Not money";
        }
        transactionService.addTransaction(transaction);
        account.setAmount(amountAfterTransaction);
        accountService.updateAccount(account);
        return "Transaction completed";
    }

    @PutMapping
    public Transaction updateTransction(@RequestBody Transaction transaction){
        return transactionService.updateTransaction(transaction);
    }

    @DeleteMapping("{id}")
    public String deleteTransaction(@RequestParam int id){
        transactionService.deleteTransaction(id);
        return "Transaction delete";
    }
}
