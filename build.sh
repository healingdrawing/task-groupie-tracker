#!/bin/bash
docker build -t groupie-tracker .
docker run -p 8080:8080 -p 3000:3000 groupie-tracker
