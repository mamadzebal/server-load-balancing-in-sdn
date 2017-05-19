#!/bin/bash

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export PATH

floodlight_ip=$1
floodlight_port=$2

counter=0
while [  $counter -lt 120 ]; do
   /root/serverScript/sendServerInfo.sh $floodlight_ip $floodlight_port 
   let counter=counter+1
   sleep 0.5
done
