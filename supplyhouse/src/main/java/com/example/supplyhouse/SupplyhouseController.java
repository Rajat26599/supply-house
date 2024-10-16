package com.example.supplyhouse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class SupplyhouseController {

    @Autowired
    SupplyhouseService SupplyhouseService;

    @GetMapping("/specialhours")
    public HashMap<String, String> contactUs() {
        HashMap<String, String> res = new HashMap<>();
        res.put("startTime", SupplyhouseService.getSpecialhours().getStartTime());
        res.put("endTime", SupplyhouseService.getSpecialhours().getEndTime());
        return res;
    }
}
