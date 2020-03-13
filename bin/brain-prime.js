#!/usr/bin/env node

import startGame from '../src/index.js';
import getBrainPrimeGameData from '../games/brain-prime-game.js';

startGame(getBrainPrimeGameData);
