#!/usr/bin/env node

import greetAndGetUserName from '../src/index.js';
import brainCalcGame from '../games/brain-calc-game.js';

const nameOfUser = greetAndGetUserName();
brainCalcGame(nameOfUser, 3);
