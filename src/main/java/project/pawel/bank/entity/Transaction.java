package project.pawel.bank.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name="account_id")
    private int accountId;

    @Column(name = "amount")
    private double amount;

    @Column(name = "address")
    private String address;

    @Column(name = "type")
    private String type;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private LocalDateTime dateTime;

    @Column(name = "send_to_account")
    private long sendToAccount;

    public Transaction() {
    }

    public Transaction(int id, int accountId, double amount, String address, String type, String description, LocalDateTime dateTime, long sendToAccount) {
        this.id = id;
        this.accountId = accountId;
        this.amount = amount;
        this.address = address;
        this.type = type;
        this.description = description;
        this.dateTime = dateTime;
        this.sendToAccount = sendToAccount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public long getSendToAccount() {
        return sendToAccount;
    }

    public void setSendToAccount(long sendToAccount) {
        this.sendToAccount = sendToAccount;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", accountId=" + accountId +
                ", amount=" + amount +
                ", address='" + address + '\'' +
                ", type='" + type + '\'' +
                ", description='" + description + '\'' +
                ", dateTime=" + dateTime +
                ", sendToAccount=" + sendToAccount +
                '}';
    }
}
