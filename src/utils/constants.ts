import Rule from "../lib/Rule.ts"
import Pattern from "../lib/Pattern.ts"

export const RULES_LIST = {
  Conway: new Rule(
    "Conway",
    "In Conway's Game of Life, a cell dies if it has fewer than 2 neighbors (underpopulation) or more than 3 neighbors (overpopulation). A dead cell becomes alive if it has exactly 3 neighbors (reproduction).",
    [2, 3],
    [3],
  ),
  highLife: new Rule(
    "High Life",
    "In High Life, a cell dies if it has fewer than 2 neighbors (underpopulation) or more than 3 neighbors (overpopulation). A dead cell becomes alive if it has exactly 3 or 6 neighbors.",
    [2, 3, 6],
    [3, 6],
  ),
  seeds: new Rule(
    "Seeds",
    "In Seeds, a dead cell becomes alive if it has exactly 2 neighbors. All live cells die in every generation.",
    [2],
    [2],
  ),
  seeds2: new Rule(
    "Seeds 2",
    "In Seeds 2, a dead cell becomes alive if it has exactly 2 or 3 neighbors. All live cells die in every generation.",
    [2, 3],
    [2, 3],
  ),
  lifeWithoutDeath2: new Rule(
    "Life without Death 2",
    "In Life without Death, a cell stays alive if it has 1, 2, 3, 4, 5, 6, 7, or 8 neighbors. A dead cell becomes alive if it has exactly 2 neighbors.",
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [2],
  ),
  lifeWithoutDeath3: new Rule(
    "Life without Death 2",
    "In Life without Death, a cell stays alive if it has 1, 2, 3, 4, 5, 6, 7, or 8 neighbors. A dead cell becomes alive if it has exactly 3 neighbors.",
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [3],
  ),
  lifeWithoutDeath4: new Rule(
    "Life without Death 4",
    "In Life without Death, a cell stays alive if it has 1, 2, 3, 4, 5, 6, 7, or 8 neighbors. A dead cell becomes alive if it has exactly 4 neighbors.",
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [4],
  ),
  life34: new Rule(
    "34 Life",
    "In 34 Life, a cell stays alive if it has 3 or 4 neighbors, and a dead cell becomes alive if it has 3 or 4 neighbors.",
    [3, 4],
    [3, 4],
  ),
  diamoeba: new Rule(
    "Diamoeba",
    "In Diamoeba, a cell dies if it has fewer than 5 neighbors or more than 8 neighbors. A dead cell becomes alive if it has exactly 3, 5, 6, 7, or 8 neighbors.",
    [2, 6, 7],
    [3, 5, 6, 7, 8],
  ),
  twoByTwo: new Rule(
    "2x2",
    "In 2x2, a cell dies if it has exactly 2 or 3 neighbors. A dead cell becomes alive if it has exactly 3 or 6 neighbors.",
    [0, 1, 4, 5, 6, 7, 8],
    [3, 6],
  ),
  maze: new Rule(
    "Maze",
    "In Maze, a cell dies if it has fewer than 1 or more than 5 neighbors. A dead cell becomes alive if it has exactly 3 neighbors.",
    [1, 2, 3, 4, 5],
    [3],
  ),
  move: new Rule(
    "Move",
    "In Move, a cell dies if it has fewer than 2 or more than 6 neighbors. A dead cell becomes alive if it has exactly 3 neighbors.",
    [2, 3, 4, 5, 6],
    [3],
  ),
  pseudoLife: new Rule(
    "Pseudo Life",
    "In Pseudo Life, a cell dies if it has fewer than 2 or more than 3 neighbors. A dead cell becomes alive if it has exactly 3 or 8 neighbors.",
    [2, 3],
    [3, 8],
  ),
  walledCities: new Rule(
    "Walled Cities",
    "In Walled Cities, a cell dies if it has fewer than 4 or more than 5 neighbors. A dead cell becomes alive if it has exactly 4 or 5 neighbors.",
    [4, 5],
    [4, 5],
  ),
  stains: new Rule(
    "Stains",
    "In Stains, a cell dies if it has fewer than 2 or more than 3 neighbors. A dead cell becomes alive if it has exactly 3 or 7 neighbors.",
    [2, 3, 7],
    [3, 7],
  ),
  coagulations: new Rule(
    "Coagulations",
    "In Coagulations, a cell dies if it has fewer than 2 or more than 3 neighbors. A dead cell becomes alive if it has exactly 3, 7, or 8 neighbors.",
    [2, 3, 7, 8],
    [3, 7, 8],
  ),
  dayAndNight: new Rule(
    "Day & Night",
    "In Day & Night, a cell dies if it has fewer than 3 or more than 6 neighbors. A dead cell becomes alive if it has exactly 3, 6, 7, or 8 neighbors.",
    [3, 7],
    [3, 6, 7, 8],
  ),
  anneal: new Rule(
    "Anneal",
    "In Anneal, a cell dies if it has fewer than 3 or more than 5 neighbors. A dead cell becomes alive if it has exactly 4, 6, or 7 neighbors.",
    [3, 4, 5],
    [4, 6, 7],
  ),
  moveMirror: new Rule(
    "Move-Mirror",
    "In Move-Mirror, a cell dies if it has fewer than 1 or more than 7 neighbors. A dead cell becomes alive if it has exactly 3 or 5 neighbors.",
    [1, 3, 4, 5, 7],
    [3, 5],
  ),
  longLife: new Rule(
    "Long Life",
    "In Long Life, a cell dies if it has fewer than 5 or more than 6 neighbors. A dead cell becomes alive if it has exactly 5 or 6 neighbors.",
    [5, 6],
    [5, 6],
  ),
  ameoba: new Rule(
    "Ameoba",
    "In Ameoba, a cell dies if it has fewer than 5 or more than 8 neighbors. A dead cell becomes alive if it has exactly 3, 5, 7, or 8 neighbors.",
    [3, 5, 7],
    [3, 5, 7, 8],
  ),
  replicator: new Rule(
    "Replicator",
    "In Replicator, a cell dies if it has an odd number of neighbors. A dead cell becomes alive if it has an even number of neighbors.",
    [0, 2, 4, 6, 8],
    [0, 2, 4, 6, 8],
  ),
} as const

export const PATTERNS_LIST = {
  cubeX4: new Pattern(
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ],
    "Cube x4",
  ),
  beacon: new Pattern(
    [
      [0, 0],
      [1, 0],
      [0, 1],
      [3, 2],
      [2, 3],
      [3, 3],
    ],
    "Beacon",
  ),
  pulsar: new Pattern(
    [
      [2, 0],
      [3, 0],
      [4, 0],
      [8, 0],
      [9, 0],
      [10, 0],
      [0, 2],
      [5, 2],
      [7, 2],
      [12, 2],
      [0, 3],
      [5, 3],
      [7, 3],
      [12, 3],
      [0, 4],
      [5, 4],
      [7, 4],
      [12, 4],
      [2, 5],
      [3, 5],
      [4, 5],
      [8, 5],
      [9, 5],
      [10, 5],
      [2, 7],
      [3, 7],
      [4, 7],
      [8, 7],
      [9, 7],
      [10, 7],
      [0, 8],
      [5, 8],
      [7, 8],
      [12, 8],
      [0, 9],
      [5, 9],
      [7, 9],
      [12, 9],
      [0, 10],
      [5, 10],
      [7, 10],
      [12, 10],
      [2, 12],
      [3, 12],
      [4, 12],
      [8, 12],
      [9, 12],
      [10, 12],
    ],
    "Pulsar",
  ),
  pentadecathlon: new Pattern(
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [1, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [1, 3],
      [0, 4],
      [1, 4],
      [2, 4],
    ],
    "Pentadecathlon",
  ),
  glider: new Pattern(
    [
      [0, 0],
      [1, 1],
      [2, 1],
      [0, 2],
      [1, 2],
    ],
    "Glider",
  ),
  lwss: new Pattern(
    [
      [0, 0],
      [3, 0],
      [4, 1],
      [0, 2],
      [4, 2],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
    ],
    "Lightweight spaceship",
  ),
  gliderGun: new Pattern(
    [
      [1, 5],
      [1, 6],
      [2, 6],
      [2, 5],
      [11, 5],
      [11, 6],
      [11, 7],
      [12, 8],
      [13, 9],
      [14, 9],
      [12, 4],
      [13, 3],
      [14, 3],
      [15, 6],
      [16, 4],
      [16, 8],
      [17, 5],
      [17, 6],
      [17, 7],
      [18, 6],
      [21, 5],
      [21, 4],
      [21, 3],
      [22, 5],
      [22, 4],
      [22, 3],
      [23, 6],
      [23, 2],
      [25, 6],
      [25, 7],
      [25, 2],
      [25, 1],
      [35, 3],
      [35, 4],
      [36, 3],
      [36, 4],
    ],
    "Gosper glider gun",
  ),
} as const
