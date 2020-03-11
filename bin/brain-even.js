#!/usr/bin/env node

import startGame from '../src/index.js';
import getBrainEvenGameData from '../games/brain-even-game.js';

startGame(getBrainEvenGameData);
