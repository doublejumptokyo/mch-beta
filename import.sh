#!/bin/sh

ENV=sand

make migrate ENV=$ENV TARGET=200 KEY=10
make migrate ENV=$ENV TARGET=201 KEY=01
make migrate ENV=$ENV TARGET=202 KEY=02
make migrate ENV=$ENV TARGET=203 KEY=03
make migrate ENV=$ENV TARGET=204 KEY=04
make migrate ENV=$ENV TARGET=205 KEY=05
make migrate ENV=$ENV TARGET=206 KEY=06
make migrate ENV=$ENV TARGET=207 KEY=07
make migrate ENV=$ENV TARGET=208 KEY=08
make migrate ENV=$ENV TARGET=209 KEY=09

# make migrate ENV=$ENV TARGET=210 KEY=01
