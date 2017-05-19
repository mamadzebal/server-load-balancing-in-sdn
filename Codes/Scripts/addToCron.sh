#!/bin/bash

floodlight_ip=$1
floodlight_port=$2

dir=/root/serverScript
mkdir "$dir/"
wget -O $dir/scheduledScript.sh  http://$floodlight_ip:$floodlight_port/ui/scheduledScript.sh
wget -O $dir/sendServerInfo.sh http://$floodlight_ip:$floodlight_port/ui/sendServerInfo.sh

chmod +x $dir/*

python -m SimpleHTTPServer 80 &

echo "* * * * * $dir/scheduledScript.sh $floodlight_ip $floodlight_port" >> /var/spool/cron/crontabs/root

