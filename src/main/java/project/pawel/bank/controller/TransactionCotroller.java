package project.pawel.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.pawel.bank.entity.Account;
import project.pawel.bank.entity.Transaction;
import project.pawel.bank.service.AccountService;
import project.pawel.bank.service.TransactionService;
import project.pawel.bank.tools.PageTransaction;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("transaction")
public class TransactionCotroller {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private AccountService accountService;

    @PostMapping("/transactions")
    public List<Transaction> getTransactions(@RequestBody PageTransaction pageTransaction){
        System.out.println(pageTransaction.toString());
        Pageable pageable = PageRequest.of(pageTransaction.getPage()-1,10, Sort.by("dateTime"));
        List<Transaction> transactions =transactionService.getTransactions(pageTransaction.getAccountId(),pageable);

        return transactions;
    }
    @GetMapping("/page/{accountId}")
    public int getPageNumber(@PathVariable int accountId){
        int page = transactionService.getPageNumber(accountId);

        return page;
    }

    @GetMapping("{id}")
    public Transaction getTransaction(@PathVariable int id){
        return transactionService.getTransaction(id);
    }

    @PostMapping
    public ResponseEntity addTransaction(@RequestBody Transaction transaction){
        transaction.setId(0);
        transaction.setDateTime(LocalDateTime.now());
        Account account = accountService.getAccount(transaction.getAccountId());

        double amountAfterTransaction = account.getAmount() - transaction.getAmount();
        if(amountAfterTransaction<0){
            return new ResponseEntity("Transaction aborted. Not money", HttpStatus.CONFLICT);
        }
        transactionService.addTransaction(transaction);
        account.setAmount(amountAfterTransaction);
        accountService.updateAccount(account);
        return new ResponseEntity("Transaction completed",HttpStatus.OK);
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
