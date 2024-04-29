package com.example.ff.controller;

import com.example.ff.model.Cell;
import com.example.ff.service.SimulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController // this class is a controller with RESTful endpoints
public class SimulationController {
    private final SimulationService simulationService; //service for the logic of simulation

    @Autowired // inject the SimulationService instance here
    public SimulationController(SimulationService simulationService) {
        this.simulationService = simulationService; // simulation service is set through constructor injection
    }
    @GetMapping("/simulation/start")
    public ResponseEntity<Cell[][]> startSimulation(@Value("${simulation.positionX}") int positionX,
                                                    @Value("${simulation.positionY}") int positionY,
                                                    @Value("${simulation.positionX1}") int positionX1,
                                                    @Value("${simulation.positionY1}") int positionY1) {
        // The method internally uses settings from application.properties
        Cell[][] gridState = simulationService.startAndRetrieveGrid(positionX,positionY,positionX1, positionY1);
        return ResponseEntity.ok(gridState);
    }
    @GetMapping("/simulation/step") // Mapping for the endpoint that will trigger a simulation step
    public ResponseEntity<Cell[][]> simulateStep() {
        simulationService.simulateStep(); //simulation step logic
        // method getGridState returns the current state of the grid
        return ResponseEntity.ok(simulationService.getGridState());
    }
  /*  @PostMapping("/simulation/start")
    public ResponseEntity<Cell[][]> startSimulation(@Value("${simulation.positionX}") int positionX,
                                                    @Value("${simulation.positionY}") int positionY,
                                                    @Value("${simulation.positionX1}") int positionX1,
                                                    @Value("${simulation.positionY1}") int positionY1) {
        // Using a service to handle the simulation logic
        Cell[][] gridState = simulationService.startAndRetrieveGrid(positionX, positionY, positionX1, positionY1);
        return ResponseEntity.ok(gridState);
    }*/
  /*@PostMapping("/your-endpoint")
  public String handlePostRequest(@RequestBody YourDataType data) {
      // handle the data
      return "redirect:/success-page";
  }*/

    /*@PostMapping("/simulation/start")
  public ResponseEntity<Cell[][]> startSimulation(@RequestBody SimulationRequest request) {
      // Using a service to handle the simulation logic
      Cell[][] gridState = simulationService.startAndRetrieveGrid(
              request.getPositionX(),
              request.getPositionY(),
              request.getPositionX1(),
              request.getPositionY1()
      );
      return ResponseEntity.ok(gridState);
  }

    // DTO class to match the JSON structure of the request body
    *//*public class SimulationRequest {
        private int positionX;
        private int positionY;
        private int positionX1;
        private int positionY1;

        public int getPositionX() {
            return 0;
        }

        public int getPositionY() {
            return 0;
        }

        public int getPositionX1() {
            return 0;
        }

        public int getPositionY1() {
            return 0;
        }

        // Standard getters and setters
    }
*//*


public static class SimulationRequest {
    private int positionX;
    private int positionY;
    private int positionX1;
    private int positionY1;

    // Default constructor for JSON deserialization
    public SimulationRequest() {
    }

    // Getters
    public int getPositionX() {
        return positionX;
    }

    public int getPositionY() {
        return positionY;
    }

    public int getPositionX1() {
        return positionX1;
    }

    public int getPositionY1() {
        return positionY1;
    }

    // Setters
    public void setPositionX(int positionX) {
        this.positionX = positionX;
    }

    public void setPositionY(int positionY) {
        this.positionY = positionY;
    }

    public void setPositionX1(int positionX1) {
        this.positionX1 = positionX1;
    }

    public void setPositionY1(int positionY1) {
        this.positionY1 = positionY1;
    }
}*/
}