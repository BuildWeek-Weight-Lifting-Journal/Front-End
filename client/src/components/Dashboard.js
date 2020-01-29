import React, { useEffect, useState, useContext } from 'react;
import { UserContext } from '../contexts/UserContext.js';
import axios from 'axios';
import JournalList from './journals/JournalList.js';
import { Link } from 'react-router-dom';
