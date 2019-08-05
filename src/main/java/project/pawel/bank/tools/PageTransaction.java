package project.pawel.bank.tools;

public class PageTransaction {

    private int accountId;
    private int page;

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    @Override
    public String toString() {
        return "PageTransaction{" +
                "accountId=" + accountId +
                ", page=" + page +
                '}';
    }
}
