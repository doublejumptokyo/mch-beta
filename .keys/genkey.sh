#!/bin/bash

LOOM=/home/rmanzoku/src/github.com/doublejumptokyo/go-mydapps/loom


for i in `seq -w 1 10`
do
    $LOOM genkey -k minter$i.key -a minter$i.pub > minter$i.addr
done

cat minter*.addr | grep "local address:" | cut -d" " -f3
