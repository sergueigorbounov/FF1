package com.example.ff.model;

public class Cell {
    private boolean burning;
    private boolean burned;
    private boolean tree;
    // Constructor for creating a Cell with only burning state specified
    //  burned state defaults to false, tree also false
    public Cell(boolean isBurning) {
        this.burning = isBurning;
        this.burned = false; // Initially, a cell isn't burned.
        this.tree = false;
    }

    // Constructor for creating a Cell
    public Cell(boolean burning, boolean burned, boolean tree) {
        this.burning = burning;
        this.burned = burned;
        this.tree = tree;
    }

    // Returns true if the cell is currently burning.
    public boolean isBurning() {
        return burning;
    }

    // Sets the cell's burning state.
    public void setBurning(boolean burning) {
        this.burning = burning;
        // If a cell is set to burning, then it's also considered burned regardless of the future state
        if (burning) {
            this.burned = true;
            this.tree = false;
        }
    }

    // Returns true if the cell has been burned at any point
    public boolean isBurned() {
        return burned;
    }

    // Sets the cell's burned state
    public void setBurned(boolean burned) {
        this.burned = burned;
    }

    public boolean isTree() {
    return tree;
    }

    public void setTree(boolean tree) {
        this.tree = tree;
    }


}
