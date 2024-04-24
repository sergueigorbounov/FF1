package com.example.ff.controller;

import com.example.ff.model.Cell;
import com.example.ff.service.SimulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // this class is a controller with RESTful endpoints
public class SimulationController {
    private final SimulationService simulationService; //service for the logic of simulation

    @Autowired // inject the SimulationService instance here
    public SimulationController(SimulationService simulationService) {
        this.simulationService = simulationService; // simulation service is set through constructor injection
    }

    @GetMapping("/simulation/step") // Mapping for the endpoint that will trigger a simulation step
    public ResponseEntity<Cell[][]> simulateStep() {
        simulationService.simulateStep(); //simulation step logic
        // method getGridState returns the current state of the grid
        return ResponseEntity.ok(simulationService.getGridState());
    }
    @PostMapping("/simulation/start")
    public ResponseEntity<Cell[][]> startSimulation(@Value("${simulation.positionX}") int positionX,
                                                    @Value("${simulation.positionY}") int positionY,
                                                    @Value("${simulation.positionX1}") int positionX1,
                                                    @Value("${simulation.positionY1}") int positionY1) {
        // Using a service to handle the simulation logic
        Cell[][] gridState = simulationService.startAndRetrieveGrid(positionX, positionY, positionX1, positionY1);
        return ResponseEntity.ok(gridState);
    }


}
