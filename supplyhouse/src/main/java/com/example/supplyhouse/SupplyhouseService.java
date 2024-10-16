package com.example.supplyhouse;

import org.springframework.stereotype.Service;

@Service
public class SupplyhouseService {
    public Specialhours getSpecialhours() {
        String startTime = "8:45am";
        String endTime = "7:45pm";
        return new Specialhours(startTime, endTime);
    }
}
