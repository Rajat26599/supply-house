package com.example.supplyhouse;

import org.springframework.stereotype.Component;

@Component
public class Specialhours {
    private String startTime;
    private String endTime;

    public Specialhours() {
        this.startTime = "";
        this.endTime = "";
    }

    public Specialhours(String startTime, String endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    @Override
    public String toString() {
        return "Specialhours{" +
                "startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                '}';
    }
}
