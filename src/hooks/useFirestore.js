import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
