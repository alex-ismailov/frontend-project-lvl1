#!/usr/bin/env node

import startGame from '../src/index.js';
import getBrainGCDGameData from '../games/brain-gcd-game.js';

startGame(getBrainGCDGameData);
