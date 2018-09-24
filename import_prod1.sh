#!/bin/sh

ENV=prod

make migrate ENV=$ENV TARGET=300 KEY=10
make migrate ENV=$ENV TARGET=301 KEY=01
make migrate ENV=$ENV TARGET=302 KEY=02
make migrate ENV=$ENV TARGET=303 KEY=03
make migrate ENV=$ENV TARGET=304 KEY=04
make migrate ENV=$ENV TARGET=305 KEY=05
make migrate ENV=$ENV TARGET=306 KEY=06
make migrate ENV=$ENV TARGET=307 KEY=07
make migrate ENV=$ENV TARGET=308 KEY=08
make migrate ENV=$ENV TARGET=309 KEY=09

tail -f loom_${ENV}*.log
# make migrate ENV=$ENV TARGET=210 KEY=01
