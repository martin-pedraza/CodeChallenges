#!/bin/bash

echo "Installing frontend dependencies..."
cd frontend
npm install

if [ $? -ne 0 ]; then
  echo "Failed to install frontend dependencies"
  exit 1
fi

echo "Installing backend dependencies..."
cd ../backend
npm install

if [ $? -ne 0 ]; then
  echo "Failed to install backend dependencies"
  exit 1
fi

echo "Dependencies installed successfully for both frontend and backend"
