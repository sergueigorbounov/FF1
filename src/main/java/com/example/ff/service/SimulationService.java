package com.example.ff.service;

import com.example.ff.model.Cell;
import com.example.ff.model.Grid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class SimulationService {

    private final Grid grid;
    private final Random random = new Random();


    public SimulationService(@Value("${simulation.height}") int height,
                             @Value("${simulation.width}") int width,
                             @Value("${simulation.spreadProbability}") double spreadProbability,
                             @Value("${simulation.positionX}") int positionX,
                             @Value("${simulation.positionY}") int positionY,
                             @Value("${simulation.positionX1}") int positionX1,
                             @Value("${simulation.positionY1}") int positionY1) {

        this.grid = new Grid(height, width, spreadProbability);
        initializeGridWithFire(positionX, positionY, positionX1, positionY1);
    }

    private void initializeGridWithFire(@Value("${simulation.positionX}") int positionX,
                                        @Value("${simulation.positionY}") int positionY,
                                        @Value("${simulation.positionX1}") int positionX1,
                                        @Value("${simulation.positionY1}") int positionY1) {
        // Initially, all cells are not burning
        for (int i = 0; i < grid.getHeight(); i++) {
            for (int j = 0; j < grid.getWidth(); j++) {
                grid.getCell(i, j).setBurning(false);
                grid.getCell(i, j).setBurned(false);
                grid.getCell(i, j).setTree(true);
                grid.getCell(positionX, positionY).setBurning(true);
                grid.getCell(positionX1, positionY1).setBurning(true);

            }
        }
        // Ignite a few cells at random positions as start
        for (int i = 0; i < grid.getHeight(); i++) {
            for (int j = 0; j < grid.getWidth(); j++) {
                if (Math.random() < 0.01) { //  chance to start burning
                    grid.getCell(i, j).setBurning(true);
                }
            }
        }
    }

    public void simulateStep() {
        // method needs to update the burning and burned state of each cell
        spreadFire();
    }

    private void spreadFire() {
        Cell[][] newCells = grid.cloneCells();

        for (int i = 0; i < grid.getHeight(); i++) {
            for (int j = 0; j < grid.getWidth(); j++) {
                Cell currentCell = grid.getCell(i, j);
                if (currentCell.isBurning()) {
                    // setting the cell to burned
                    newCells[i][j].setBurning(false);
                    newCells[i][j].setBurned(true);
                    newCells[i][j].setTree(false);
                    // Spread fire
                    spreadFireToAdjacentCells(i, j, newCells);
                }
            }
        }

        grid.setCells(newCells);
    }

    private void spreadFireToAdjacentCells(int x, int y, Cell[][] newCells) {
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};

        for (int i = 0; i < 4; i++) {
            int newX = x + dx[i];
            int newY = y + dy[i];

            // Check neighbours and only spread fire if the adjacent cell has a tree that is not already burning
            if (newX >= 0 && newX < grid.getHeight() && newY >= 0 && newY < grid.getWidth()) {
                Cell adjacentCell = newCells[newX][newY];
                if (adjacentCell.isTree() && !adjacentCell.isBurning() && Math.random() < grid.getSpreadProbability()) {
                    adjacentCell.setBurning(true);
                }
            }
        }
    }

    public Cell[][] getGridState() {
        return grid.getCells();
    }

    // initial state with some cells on fire and returns the state
    public Cell[][] startAndRetrieveGrid(int positionX, int positionY, int positionX1, int positionY1) {
        initializeGridWithFire(positionX, positionY, positionX1, positionY1); // Reinitialize the grid with fire
        return getGridState(); // Return the grid's initial state
    }
}
