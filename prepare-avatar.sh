#!/bin/bash

var=1
currdate=`date "+%Y%m%d%n"`

for i in *.jpeg
    do echo -en "Converting $i ... "
    imagename="avatar-${currdate}-${var}.jpeg"
    convert $i -resize 300x300^ -gravity center -extent 200x200 img/${imagename}
    echo "to ${imagename}."
    var=$((var+1))
done
