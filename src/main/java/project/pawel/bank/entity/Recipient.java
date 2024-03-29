package project.pawel.bank.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "recipient")
public class Recipient {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "account_number")
    private long accountNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "user_id")
    private int userId;

    public Recipient() {
    }

    public Recipient(int id, String name, long accountNumber, String address,int userId) {
        this.id = id;
        this.name = name;
        this.accountNumber = accountNumber;
        this.address = address;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Recipient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", accountNumber=" + accountNumber +
                ", address='" + address + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }
}
