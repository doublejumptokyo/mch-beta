#!/bin/sh

file="js/hero_mint.js"

split -l100 -d raw/mint.txt splited/mint_

for f in `ls splited`; do
    file="js/$(date +%s)_$f.js"

    echo -n "" > $file
    echo "let HeroManager = artifacts.require('HeroManager');" >> $file
    echo "" >> $file
    echo "module.exports = function(deployer) {" >> $file
    echo "    deployer.then(async function() {"  >> $file
    echo "        let heroManager = await HeroManager.deployed();" >> $file
    echo "" >> $file
    cat splited/$f | sed -e "s/^/        /g" >> $file
    echo "    });" >> $file
    echo -n "}" >> $file

    sleep 1
done


