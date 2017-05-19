"""Custom topology example

Adding the 'topos' dict with a key/value pair to generate our newly defined
topology enables one to pass in '--topo=mytopo' from the command line.
"""
__author__='Mohammad Farhoudi'
from mininet.topo import Topo
from mininet.util import irange, dumpNodeConnections

class MyTopo( Topo ):
    "Simple topology example."

    def __init__( self ):
        "Create custom topo."

        # Initialize topology
        Topo.__init__( self )

        core = self.addSwitch('c1')
        index=0
        for aggregateIndex in irange(1,2):
            aggregation = self.addSwitch('a%s' % aggregateIndex)
            self.addLink( aggregation, core ) 
            for edgeIndex in irange(1, 2):
                edge = self.addSwitch('e%s' %(edgeIndex+(aggregateIndex-1)*2))
                self.addLink( aggregation, edge )
                index=index+1
                for hostIndex in irange(1, 2):
                    host = self.addHost('h%s' %((hostIndex-1)+(index-1)*2 + 1) )
                    self.addLink( host, edge )


        # leftSwitch = self.addSwitch( 'a1' )
        # rightSwitch = self.addSwitch( 'a2' )

        # leftLeftSwitch = self.addSwitch( 'e1' )
        # leftRightSwitch = self.addSwitch( 'e2' )

        # rightLeftSwitch = self.addSwitch( 'e3' )
        # rightRightSwitch = self.addSwitch( 'e4' )
        
        # Add hosts and switches
        # left1Host = self.addHost( 'h1' )
        # right1Host = self.addHost( 'h2' )
        # left2Host = self.addHost( 'h3' )
        # right2Host = self.addHost( 'h4' )
        # left3Host = self.addHost( 'h5' )
        # right3Host = self.addHost( 'h6' )
        # left4Host = self.addHost( 'h7' )
        # right4Host = self.addHost( 'h8' )
        

        # Add links
        # self.addLink( leftSwitch, core )
        # self.addLink( rightSwitch, core )
        # self.addLink( leftLeftSwitch, leftSwitch)
        # self.addLink( leftRightSwitch, leftSwitch)
        # self.addLink( rightLeftSwitch, rightSwitch)
        # self.addLink( rightRightSwitch, rightSwitch)
        # self.addLink( left1Host, leftLeftSwitch)
        # self.addLink( right1Host, leftLeftSwitch)
        # self.addLink( left2Host, leftRightSwitch)
        # self.addLink( right2Host, leftRightSwitch)
        # self.addLink( left3Host, rightLeftSwitch)
        # self.addLink( right3Host, rightLeftSwitch)
        # self.addLink( left4Host, rightRightSwitch)
        # self.addLink( right4Host, rightRightSwitch)

topos = { 'mytopo': ( lambda: MyTopo() ) }