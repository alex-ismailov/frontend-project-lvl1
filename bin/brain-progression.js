#!/usr/bin/env node

import startGame from '../src/index.js';
import getBrainProgressionGameData from '../games/brain-progression-game.js';

startGame(getBrainProgressionGameData);
