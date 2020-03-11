#!/usr/bin/env node

import startGame from '../src/index.js';
import getBrainCalcGameData from '../games/brain-calc-game.js';

startGame(getBrainCalcGameData);
