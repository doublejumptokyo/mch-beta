#!/bin/sh

ENV=sand

make migrate ENV=$ENV TARGET=290 KEY=01

tail -f loom_${ENV}*.log
# make migrate ENV=$ENV TARGET=210 KEY=01
