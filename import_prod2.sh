#!/bin/sh

ENV=prod

make migrate ENV=$ENV TARGET=310 KEY=10
make migrate ENV=$ENV TARGET=311 KEY=01
make migrate ENV=$ENV TARGET=312 KEY=02
make migrate ENV=$ENV TARGET=313 KEY=03
# make migrate ENV=$ENV TARGET=314 KEY=04
# make migrate ENV=$ENV TARGET=315 KEY=05
# make migrate ENV=$ENV TARGET=316 KEY=06
# make migrate ENV=$ENV TARGET=317 KEY=07
# make migrate ENV=$ENV TARGET=318 KEY=08
# make migrate ENV=$ENV TARGET=319 KEY=09

tail -f loom_${ENV}*.log

