#!/usr/bin/env node

import greetAndGetUserName from '../src/index.js';
import brainEvenGame from '../src/brain-even-game.js';

const nameOfUser = greetAndGetUserName();
brainEvenGame(nameOfUser, 3);
