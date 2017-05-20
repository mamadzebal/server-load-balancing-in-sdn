# Server Load Balancing in SDN

## Running Floodlight
Firstly run Floodlight Controller that exists in Codes/Load_Balancing. import it on java Eclipse on run main configuration.
 default port is 6653. Guide for importing and running floodlight is exists in Floodlight Documentation and also in www.floodlight.atlassian.net
 
 you need to run scripts that get information of web servers and send these info to floodlight controller. this script on Codes/Script/addToCron.sh and can run with
 
 
```bash
$ sudo Codes/Scripts/addToCron.sh <Floodlight_IP> 8080
```
 
## Running Mininet and Fat-Tree topology
Then we need to run Fat-Tree on mininet. Mininet-Fat-Tree is written by python language base on Mininet emulator that creates a fat-tree with K parameter(pods).
--kterm is number of pods and --coPort is floodlight controller port that listen for connecting ti mininet.

```bash
$ sudo python FatTreeTopo.py --kterm=2 --coPort=6653
```


## Send Request to Servers

by using these commands on mininet can send request to server.
```bash
$ h1 wget -O - <Virtual-IP>
```

Load Balancing Module get the request process it by optimization codes (which is use ilogCplex that in Documentation/ilog) and send request to best active servers. 

response from server also passed to client on outgoing switch
