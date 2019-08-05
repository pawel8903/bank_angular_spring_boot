package project.pawel.bank.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity(name = "account")
public class Account {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name="account_number")
    private long accountNumber;

    @Column(name = "user_id")
    private int userId;

    @Column(name="account_name")
    private String accountName;

    @Column(name = "amount")
    private double amount;

    public Account() {
    }

    public Account(int id, long accountNumber, int userId, String accountName, double amount) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.userId = userId;
        this.accountName = accountName;
        this.amount = amount;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", accountNumber=" + accountNumber +
                ", userId=" + userId +
                ", accountName='" + accountName + '\'' +
                ", amount=" + amount +
                '}';
    }
}


