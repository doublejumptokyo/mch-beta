#!/bin/sh

ENV=prod

make migrate ENV=$ENV TARGET=390 KEY=01

tail -f loom_${ENV}*.log
# make migrate ENV=$ENV TARGET=210 KEY=01
