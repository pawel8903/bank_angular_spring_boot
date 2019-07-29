package project.pawel.bank.tools;



public class AccountNumberGenerator {


    public long getRandomNumber(){
        long number = (long)(Math.random() * 1000000000000000L);
        number+= 5200000000000000L;
        return  number;
    }
}
