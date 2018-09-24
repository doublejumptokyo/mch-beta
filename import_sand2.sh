#!/bin/sh

ENV=sand

make migrate ENV=$ENV TARGET=210 KEY=10
make migrate ENV=$ENV TARGET=211 KEY=01
make migrate ENV=$ENV TARGET=212 KEY=02
make migrate ENV=$ENV TARGET=213 KEY=03
# make migrate ENV=$ENV TARGET=214 KEY=04
# make migrate ENV=$ENV TARGET=215 KEY=05
# make migrate ENV=$ENV TARGET=216 KEY=06
# make migrate ENV=$ENV TARGET=217 KEY=07
# make migrate ENV=$ENV TARGET=218 KEY=08
# make migrate ENV=$ENV TARGET=219 KEY=09

tail -f loom_${ENV}*.log
# make migrate ENV=$ENV TARGET=210 KEY=01
