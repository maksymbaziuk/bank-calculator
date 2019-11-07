package com.karabaz.bankcalculator.bank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BankDataLoader implements CommandLineRunner {

    private final BankRepository bankRepository;

    @Autowired
    public BankDataLoader(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        bankRepository.save(new Bank("Ukrsibbank"));
        bankRepository.save(new Bank("PrivatBank"));
        bankRepository.save(new Bank("Monobank"));
    }
}
