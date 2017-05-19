#!/bin/bash

# This Script need curl & sysstat tools installed in the system
# get: cpu idle - memory free - tps (I/O rate) - number of tcp connection
# and send this info to floodlight controller ( url: /wm/retrieveInfo/v1.0/server/ )
# @author: Mohammad Farhoudi

date=`date +%s%N`
filename="/root/serverScipt/$filename"

sar -bur 1 1> $filename

mac=$(ifconfig -a | awk '/^[a-z]/ { iface=$1; mac=$NF; next } /inet addr:/ { if(iface != "lo") print mac }')

ip=$(ifconfig | awk -F "[: ]+" '/inet addr:/ { if ($4 != "127.0.0.1") print $4 }')

#number of connection
tcp=$(netstat -an | grep $ip | grep -c ESTABLISHED)

cpuscript=`grep Average /root/serverScipt/output.out | awk 'NR==2'`
IFS=' ' read -r -a cpuarray <<< "$cpuscript"
cpu="${cpuarray[7]}"

memoryscript=`grep Average /root/serverScipt/output.out | awk 'NR==6'`
IFS=' ' read -r -a memoryarray <<< "$memoryscript"
memory="${memoryarray[2]}"

tpsscript=`grep Average /root/serverScipt/output.out | awk 'NR==4'`
IFS=' ' read -r -a tpsarray <<< "$tpsscript"
tps="${tpsarray[1]}"

rm -rf $filename

floodlight_ip=$1
floodlight_port=$2
curl -X POST -d '{"mac":"'$mac'","address":"'$ip'","cpu":"'$cpu'","memory":"'$memory'","tps":"'$tps'","tcp":"'$tcp'"}' http://$floodlight_ip:$floodlight_port/wm/retrieveInfo/v1.0/server/
