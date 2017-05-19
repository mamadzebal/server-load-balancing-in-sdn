import java.awt.Color;
import java.awt.Desktop;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextArea;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import ilog.concert.*;
import ilog.cplex.*;

public class loadBalancing {	
	static int[] Nodes;
    static int[][] Edge;
    static int Sender;
    static double[] LinkCapacity;
    static double[] LinkLoad;
    
	static int[] activeServers;
	
	static double[] CPUCapacity;
    static double[] RAMCapacity;
    static double[] DISKCapacity;
    static double[] TCPConnHandle;
    
    static double[] CPULoad;
    static double[] RAMLoad;
    static double[] DISKLoad;
    static double[] TCPConnNo;
    
    static double[] coefficientOfCost;
    static double[] coefficientOfReqType;
    static int coefficientOfLinkCost;

    static IloCplex cplex;
    static IloIntVar[] link_selected;
    static IloIntVar[] server_selected;

    static String dataFile  = "Data/status.dat";
    JFrame frame;
    static JLabel serverLbl;
    static JLabel LinkLbl;
    static int runIndex; 
    
	public loadBalancing() throws IloException, java.io.IOException, InputDataReader.InputDataReaderException {
		frame = new JFrame("Load Balancing Algorithm");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		//input frame
		JTextArea inputsText = new JTextArea();
		inputsText.setEditable(false);
		inputsText.setBackground(Color.LIGHT_GRAY);
		inputsText.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, Color.gray));
		inputsText.setSize(870, 370);
		inputsText.setLocation(7, 5);
		frame.add(inputsText);
		
		JLabel inputLbl = new JLabel("Network");
		inputLbl.setForeground(Color.red);
		inputLbl.setSize(100, 20);
		inputLbl.setLocation(400, 0);
		inputsText.add(inputLbl);
		
		//nodes line
		JLabel nodesLbl = new JLabel("Nodes:");
		nodesLbl.setForeground(Color.CYAN);
		nodesLbl.setSize(50, 20);
		nodesLbl.setLocation(15, 20);
		inputsText.add(nodesLbl);
		
		final JTextArea nodestxt = new JTextArea();
		nodestxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		nodestxt.setSize(805, 25);
		nodestxt.setLocation(60, 19);
		inputsText.add(nodestxt);
		
		//edge line
		JLabel EdgeLbl = new JLabel("Edges:");
		EdgeLbl.setForeground(Color.CYAN);
		EdgeLbl.setSize(50, 20);
		EdgeLbl.setLocation(15, 55);
		inputsText.add(EdgeLbl);
		
		final JTextArea Edgetxt = new JTextArea();
		Edgetxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		Edgetxt.setSize(805, 25);
		Edgetxt.setLocation(60, 54);
		inputsText.add(Edgetxt);
		
		//active servers & sender line
		JLabel activeServerLbl = new JLabel("Active Servers:");
		activeServerLbl.setSize(90, 20);
		activeServerLbl.setLocation(15, 90);
		inputsText.add(activeServerLbl);
		
		final JTextArea activeServerTxt = new JTextArea();
		activeServerTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		activeServerTxt.setSize(600, 25);
		activeServerTxt.setLocation(105, 89);
		inputsText.add(activeServerTxt);
		
		JLabel senderLbl = new JLabel("Sender Switch:");
		senderLbl.setSize(150, 20);
		senderLbl.setLocation(710, 90);
		inputsText.add(senderLbl);
		
		final JTextArea senderTxt = new JTextArea();
		senderTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		senderTxt.setSize(65, 25);
		senderTxt.setLocation(800, 89);
		inputsText.add(senderTxt);
		
		//linnnnks
		JLabel link1layerLbl = new JLabel("Links");
		link1layerLbl.setForeground(Color.red);
		link1layerLbl.setSize(100, 20);
		link1layerLbl.setLocation(400, 115);
		inputsText.add(link1layerLbl);
		
		//link capacity  line
		JLabel linkCapacityLbl = new JLabel("Link Capacity:");
		linkCapacityLbl.setSize(150, 20);
		linkCapacityLbl.setLocation(5, 135);
		inputsText.add(linkCapacityLbl);
		
		final JTextArea linkCapacityTxt = new JTextArea();
		linkCapacityTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		linkCapacityTxt.setSize(780, 25);
		linkCapacityTxt.setLocation(85, 134);
		inputsText.add(linkCapacityTxt);
		
		//link loadline
		JLabel linkLoadLbl = new JLabel("Link Load:");
		linkLoadLbl.setForeground(Color.blue);
		linkLoadLbl.setSize(150, 20);
		linkLoadLbl.setLocation(5, 165);
		inputsText.add(linkLoadLbl);
		
		final JTextArea linkLoadTxt = new JTextArea();
		linkLoadTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		linkLoadTxt.setSize(780, 25);
		linkLoadTxt.setLocation(85, 164);
		inputsText.add(linkLoadTxt);
		
		//serveeeeeeers
		JLabel server1layerLbl = new JLabel("Servers");
		server1layerLbl.setForeground(Color.red);
		server1layerLbl.setSize(100, 20);
		server1layerLbl.setLocation(400, 190);
		inputsText.add(server1layerLbl);
		
		//cpu capacity & load line
		JLabel cpuCapacityLbl = new JLabel("CPU Capacity:");
		cpuCapacityLbl.setSize(150, 20);
		cpuCapacityLbl.setLocation(15, 210);
		inputsText.add(cpuCapacityLbl);
		
		final JTextArea cpuCapacityTxt = new JTextArea();
		cpuCapacityTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		cpuCapacityTxt.setSize(350, 25);
		cpuCapacityTxt.setLocation(105, 209);
		inputsText.add(cpuCapacityTxt);
		
		
		JLabel cpuLoadLbl = new JLabel("CPU Load:");
		cpuLoadLbl.setForeground(Color.blue);
		cpuLoadLbl.setSize(150, 20);
		cpuLoadLbl.setLocation(456, 210);
		inputsText.add(cpuLoadLbl);
		
		final JTextArea cpuLoadTxt = new JTextArea();
		cpuLoadTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		cpuLoadTxt.setSize(347, 25);
		cpuLoadTxt.setLocation(518, 209);
		inputsText.add(cpuLoadTxt);

		//ram capacity & load line
		JLabel ramCapacityLbl = new JLabel("RAM Capacity:");
		ramCapacityLbl.setSize(150, 20);
		ramCapacityLbl.setLocation(15, 240);
		inputsText.add(ramCapacityLbl);
		
		final JTextArea ramCapacityTxt = new JTextArea();
		ramCapacityTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		ramCapacityTxt.setSize(350, 25);
		ramCapacityTxt.setLocation(105, 239);
		inputsText.add(ramCapacityTxt);
		
		
		JLabel ramLoadLbl = new JLabel("RAM Load:");
		ramLoadLbl.setForeground(Color.blue);
		ramLoadLbl.setSize(350, 20);
		ramLoadLbl.setLocation(456, 240);
		inputsText.add(ramLoadLbl);
		
		final JTextArea ramLoadTxt = new JTextArea();
		ramLoadTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		ramLoadTxt.setSize(347, 25);
		ramLoadTxt.setLocation(518, 239);
		inputsText.add(ramLoadTxt);

		//disk capacity & load line
		JLabel diskCapacityLbl = new JLabel("Disk Capacity:");
		diskCapacityLbl.setSize(150, 20);
		diskCapacityLbl.setLocation(15, 270);
		inputsText.add(diskCapacityLbl);
		
		final JTextArea diskCapacityTxt = new JTextArea();
		diskCapacityTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		diskCapacityTxt.setSize(350, 25);
		diskCapacityTxt.setLocation(105, 269);
		inputsText.add(diskCapacityTxt);
		
		
		JLabel diskLoadLbl = new JLabel("Disk Load:");
		diskLoadLbl.setForeground(Color.blue);
		diskLoadLbl.setSize(350, 20);
		diskLoadLbl.setLocation(456, 270);
		inputsText.add(diskLoadLbl);
		
		final JTextArea diskLoadTxt = new JTextArea();
		diskLoadTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		diskLoadTxt.setSize(347, 25);
		diskLoadTxt.setLocation(518, 269);
		inputsText.add(diskLoadTxt);

		//tcp capacity & load line
		JLabel tcpCapacityLbl = new JLabel("TCP Conn Hanle:");
		tcpCapacityLbl.setSize(150, 20);
		tcpCapacityLbl.setLocation(5, 300);
		inputsText.add(tcpCapacityLbl);
		
		final JTextArea tcpCapacityTxt = new JTextArea();
		tcpCapacityTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		tcpCapacityTxt.setSize(337, 25);
		tcpCapacityTxt.setLocation(105, 299);
		inputsText.add(tcpCapacityTxt);
		
		
		JLabel tcpLoadLbl = new JLabel("TCP Conn No:");
		tcpLoadLbl.setForeground(Color.blue);
		tcpLoadLbl.setSize(150, 20);
		tcpLoadLbl.setLocation(447, 300);
		inputsText.add(tcpLoadLbl);
		
		final JTextArea tcpLoadTxt = new JTextArea();
		tcpLoadTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		tcpLoadTxt.setSize(338, 25);
		tcpLoadTxt.setLocation(527, 299);
		inputsText.add(tcpLoadTxt);
		
		//coefficient of cost & type line
		JLabel coCostLbl = new JLabel("Coefficient of Cost:");
		coCostLbl.setForeground(Color.GRAY);
		coCostLbl.setSize(160, 20);
		coCostLbl.setLocation(5, 330);
		inputsText.add(coCostLbl);
		
		final JTextArea coCostTxt = new JTextArea();
		coCostTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		coCostTxt.setSize(200, 25);
		coCostTxt.setLocation(115, 329);
		inputsText.add(coCostTxt);
		
		
		JLabel coTypeLbl = new JLabel("Coefficient of Req Type:");
		coTypeLbl.setForeground(Color.GRAY);
		coTypeLbl.setSize(150, 20);
		coTypeLbl.setLocation(320, 330);
		inputsText.add(coTypeLbl);
		
		final JTextArea coTypeTxt = new JTextArea();
		coTypeTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		coTypeTxt.setSize(200, 25);
		coTypeTxt.setLocation(455, 329);
		inputsText.add(coTypeTxt);

		JLabel coLinkLbl = new JLabel("Coefficient of link Cost:");
		coLinkLbl.setForeground(Color.GRAY);
		coLinkLbl.setSize(200, 20);
		coLinkLbl.setLocation(660, 330);
		inputsText.add(coLinkLbl);
		
		final JTextArea coLinkTxt = new JTextArea();
		coLinkTxt.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.black));
		coLinkTxt.setSize(70, 25);
		coLinkTxt.setLocation(795, 329);
		inputsText.add(coLinkTxt);
		
				
		JButton startAlgorithm = new JButton("Select Best Path and Server");
		startAlgorithm.setSize(200, 20);
		startAlgorithm.setLocation(345, 380);
		startAlgorithm.addActionListener(new ActionListener() { 
			@Override
			public void actionPerformed(ActionEvent arg0) {
				try {
					saveAnRunwriteToStatus(nodestxt,Edgetxt,activeServerTxt,senderTxt,linkCapacityTxt,linkLoadTxt,cpuCapacityTxt,cpuLoadTxt,ramCapacityTxt,ramLoadTxt,diskCapacityTxt,diskLoadTxt,tcpCapacityTxt,tcpLoadTxt,coCostTxt,coTypeTxt,coLinkTxt);					
				} catch (IloException ex) {
			         System.out.println("Concert Error: " + ex);
			      }
			      catch (InputDataReader.InputDataReaderException ex) {
			         System.out.println("Data Error: " + ex);
			      }
			      catch (java.io.IOException ex) {
			         System.out.println("IO Error: " + ex);
			      }
			} 
		} );
		frame.add(startAlgorithm);
		
		serverLbl = new JLabel("");
		serverLbl.setSize(400, 20);
		serverLbl.setLocation(25, 410);
		frame.add(serverLbl);
		
		LinkLbl = new JLabel("");
		LinkLbl.setSize(400, 20);
		LinkLbl.setLocation(25, 430);
		frame.add(LinkLbl);
		
		frame.setLayout(null);
		frame.setLocation(230, 50);
		frame.setSize(900, 500);
		frame.setVisible(true);
		
		fillInputs(nodestxt,Edgetxt,activeServerTxt,senderTxt,linkCapacityTxt,linkLoadTxt,cpuCapacityTxt,cpuLoadTxt,ramCapacityTxt,ramLoadTxt,diskCapacityTxt,diskLoadTxt,tcpCapacityTxt,tcpLoadTxt,coCostTxt,coTypeTxt,coLinkTxt);
		
	}

	/**
	 * after run the optimization, fill the labels and text, and show the result
	 * @param nodestxt
	 * @param edgetxt
	 * @param activeServerTxt
	 * @param senderTxt
	 * @param linkCapacityTxt
	 * @param linkLoadTxt
	 * @param cpuCapacityTxt
	 * @param cpuLoadTxt
	 * @param ramCapacityTxt
	 * @param ramLoadTxt
	 * @param diskCapacityTxt
	 * @param diskLoadTxt
	 * @param tcpCapacityTxt
	 * @param tcpLoadTxt
	 * @param coCostTxt
	 * @param coTypeTxt
	 * @throws IloException
	 * @throws java.io.IOException
	 * @throws InputDataReader.InputDataReaderException
	 */
	public static void fillInputs(JTextArea nodestxt, JTextArea edgetxt, JTextArea activeServerTxt, JTextArea senderTxt, JTextArea linkCapacityTxt, JTextArea linkLoadTxt, JTextArea cpuCapacityTxt, JTextArea cpuLoadTxt, JTextArea ramCapacityTxt, JTextArea ramLoadTxt, JTextArea diskCapacityTxt, JTextArea diskLoadTxt, JTextArea tcpCapacityTxt, JTextArea tcpLoadTxt, JTextArea coCostTxt, JTextArea coTypeTxt, JTextArea coLinkTxt) throws IloException, java.io.IOException, InputDataReader.InputDataReaderException{
		readData(dataFile);
		
		//nodes
		nodestxt.setText("[");
		for (int i = 0; i < Nodes.length; i++) {
			if( i+1 < Nodes.length )
				nodestxt.setText( nodestxt.getText() +  Nodes[i] + ",");
			else
				nodestxt.setText( nodestxt.getText() +  Nodes[i] + "]");
		}
		
		//edge
		edgetxt.setText("[");
		for (int i = 0; i < Edge.length; i++) {
			edgetxt.setText( edgetxt.getText() + "[" + Edge[i][0] + ","+Edge[i][1] + "]");
			if( i+1 < Edge.length )
				edgetxt.setText( edgetxt.getText() +  ",");
			else
				edgetxt.setText( edgetxt.getText() +  "]");
		}
		
		//servers
		activeServerTxt.setText("[");
		for (int i = 0; i < activeServers.length; i++) {
			if( i+1 < activeServers.length )
				activeServerTxt.setText( activeServerTxt.getText() +  activeServers[i] + ",");
			else
				activeServerTxt.setText( activeServerTxt.getText() +  activeServers[i] + "]");
		}
		
		//sender
		senderTxt.setText(Integer.toString(Sender));
		
		//link
		linkCapacityTxt.setText("[");
		for (int i = 0; i < LinkCapacity.length; i++) {
			if( i+1 < LinkCapacity.length )
				linkCapacityTxt.setText( linkCapacityTxt.getText() +  LinkCapacity[i] + ",");
			else
				linkCapacityTxt.setText( linkCapacityTxt.getText() +  LinkCapacity[i] + "]");
		}
		
		linkLoadTxt.setText("[");
		for (int i = 0; i < LinkLoad.length; i++) {
			if( i+1 < LinkLoad.length )
				linkLoadTxt.setText( linkLoadTxt.getText() +  LinkLoad[i] + ",");
			else
				linkLoadTxt.setText( linkLoadTxt.getText() +  LinkLoad[i] + "]");
		}
		
		//cpu
		cpuCapacityTxt.setText("[");
		for (int i = 0; i < CPUCapacity.length; i++) {
			if( i+1 < CPUCapacity.length )
				cpuCapacityTxt.setText( cpuCapacityTxt.getText() +  CPUCapacity[i] + ",");
			else
				cpuCapacityTxt.setText( cpuCapacityTxt.getText() +  CPUCapacity[i] + "]");
		}
		
		cpuLoadTxt.setText("[");
		for (int i = 0; i < CPULoad.length; i++) {
			if( i+1 < CPULoad.length )
				cpuLoadTxt.setText( cpuLoadTxt.getText() +  CPULoad[i] + ",");
			else
				cpuLoadTxt.setText( cpuLoadTxt.getText() +  CPULoad[i] + "]");
		}
		
		//ram
		ramCapacityTxt.setText("[");
		for (int i = 0; i < RAMCapacity.length; i++) {
			if( i+1 < RAMCapacity.length )
				ramCapacityTxt.setText( ramCapacityTxt.getText() +  RAMCapacity[i] + ",");
			else
				ramCapacityTxt.setText( ramCapacityTxt.getText() +  RAMCapacity[i] + "]");
		}
		
		ramLoadTxt.setText("[");
		for (int i = 0; i < RAMLoad.length; i++) {
			if( i+1 < RAMLoad.length )
				ramLoadTxt.setText( ramLoadTxt.getText() +  RAMLoad[i] + ",");
			else
				ramLoadTxt.setText( ramLoadTxt.getText() +  RAMLoad[i] + "]");
		}
		
		//disk
		diskCapacityTxt.setText("[");
		for (int i = 0; i < DISKCapacity.length; i++) {
			if( i+1 < DISKCapacity.length )
				diskCapacityTxt.setText( diskCapacityTxt.getText() +  DISKCapacity[i] + ",");
			else
				diskCapacityTxt.setText( diskCapacityTxt.getText() +  DISKCapacity[i] + "]");
		}
		
		diskLoadTxt.setText("[");
		for (int i = 0; i < DISKLoad.length; i++) {
			if( i+1 < DISKLoad.length )
				diskLoadTxt.setText( diskLoadTxt.getText() +  DISKLoad[i] + ",");
			else
				diskLoadTxt.setText( diskLoadTxt.getText() +  DISKLoad[i] + "]");
		}
		
		//tcp
		tcpCapacityTxt.setText("[");
		for (int i = 0; i < TCPConnHandle.length; i++) {
			if( i+1 < TCPConnHandle.length )
				tcpCapacityTxt.setText( tcpCapacityTxt.getText() +  TCPConnHandle[i] + ",");
			else
				tcpCapacityTxt.setText( tcpCapacityTxt.getText() +  TCPConnHandle[i] + "]");
		}
		
		tcpLoadTxt.setText("[");
		for (int i = 0; i < TCPConnNo.length; i++) {
			if( i+1 < TCPConnNo.length )
				tcpLoadTxt.setText( tcpLoadTxt.getText() +  TCPConnNo[i] + ",");
			else
				tcpLoadTxt.setText( tcpLoadTxt.getText() +  TCPConnNo[i] + "]");
		}
		
		//coefficient
		coCostTxt.setText("[");
		for (int i = 0; i < coefficientOfCost.length; i++) {
			if( i+1 < coefficientOfCost.length )
				coCostTxt.setText( coCostTxt.getText() +  coefficientOfCost[i] + ",");
			else
				coCostTxt.setText( coCostTxt.getText() +  coefficientOfCost[i] + "]");
		}
		
		coTypeTxt.setText("[");
		for (int i = 0; i < coefficientOfReqType.length; i++) {
			if( i+1 < coefficientOfReqType.length )
				coTypeTxt.setText( coTypeTxt.getText() +  coefficientOfReqType[i] + ",");
			else
				coTypeTxt.setText( coTypeTxt.getText() +  coefficientOfReqType[i] + "]");
		}

		//sender
		coLinkTxt.setText(Integer.toString(coefficientOfLinkCost));

		
	}
	
	public static void saveAnRunwriteToStatus(JTextArea nodestxt, JTextArea edgetxt, JTextArea activeServerTxt, JTextArea senderTxt, JTextArea linkCapacityTxt, JTextArea linkLoadTxt, JTextArea cpuCapacityTxt, JTextArea cpuLoadTxt, JTextArea ramCapacityTxt, JTextArea ramLoadTxt, JTextArea diskCapacityTxt, JTextArea diskLoadTxt, JTextArea tcpCapacityTxt, JTextArea tcpLoadTxt, JTextArea coCostTxt, JTextArea coTypeTxt, JTextArea coLinkTxt) throws IloException, java.io.IOException, InputDataReader.InputDataReaderException{
		LinkLbl.setText("");
		serverLbl.setText("");
		
		writeToStatus(nodestxt, edgetxt, activeServerTxt, senderTxt, linkCapacityTxt, linkLoadTxt, cpuCapacityTxt, cpuLoadTxt, ramCapacityTxt, ramLoadTxt, diskCapacityTxt, diskLoadTxt, tcpCapacityTxt, tcpLoadTxt, coCostTxt, coTypeTxt, coLinkTxt);
		runAlgorithm(true);
	}
	
	public static void writeToStatus(JTextArea nodestxt, JTextArea edgetxt, JTextArea activeServerTxt, JTextArea senderTxt, JTextArea linkCapacityTxt, JTextArea linkLoadTxt, JTextArea cpuCapacityTxt, JTextArea cpuLoadTxt, JTextArea ramCapacityTxt, JTextArea ramLoadTxt, JTextArea diskCapacityTxt, JTextArea diskLoadTxt, JTextArea tcpCapacityTxt, JTextArea tcpLoadTxt, JTextArea coCostTxt, JTextArea coTypeTxt, JTextArea coLinkTxt){
		String output = nodestxt.getText();
		output += "\n" + edgetxt.getText();
		output += "\n" + activeServerTxt.getText();
		output += "\n" + senderTxt.getText();
		output += "\n" + linkCapacityTxt.getText();
		output += "\n" + linkLoadTxt.getText();
		output += "\n" + cpuCapacityTxt.getText();
		output += "\n" + ramCapacityTxt.getText();
		output += "\n" + diskCapacityTxt.getText();
		output += "\n" + tcpCapacityTxt.getText();
		output += "\n" + cpuLoadTxt.getText();
		output += "\n" + ramLoadTxt.getText();
		output += "\n" + diskLoadTxt.getText();
		output += "\n" + tcpLoadTxt.getText();
		output += "\n" + coCostTxt.getText();
		output += "\n" + coTypeTxt.getText();
		output += "\n" + coLinkTxt.getText();
		
		PrintWriter out;
		try {
			out = new PrintWriter(dataFile);
			out.println(output);
			out.close() ;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		
	}
	
	public static void runAlgorithm(boolean send_from_interface) throws IloException, java.io.IOException, InputDataReader.InputDataReaderException{
		try {
			readData(dataFile);
			
			
			/* start getting the random data of links and server */
			Random rand = new Random();
			Sender = rand.nextInt(2) + 1;
			
			for (int i = 0; i < CPULoad.length; i++) {
				CPULoad[i] = rand.nextDouble();
			}
			for (int i = 0; i < RAMLoad.length; i++) {
				RAMLoad[i] = randomInRange(rand, 1.0, 7.8);
				DISKLoad[i] = randomInRange(rand, 0.0, 266.05);
				TCPConnNo[i] = randomInRange(rand, 0.0, 999.0);
			}
			for (int i = 0; i < LinkLoad.length; i+=2) {				
				LinkLoad[i] = LinkLoad[i+1] = randomInRange(rand, 1.0, 29.99);
			}
			/* end getting the random data of links and server */
			
			
			long startTime = System.currentTimeMillis();
			cplex = new IloCplex();
//			if(send_from_interface)
//				cplex.setOut(null);
			createModel();
			/* solve the problem */
			int [][] send_load_from_links = new int[Edge.length][2];
			int send_load_to_server = 0;
			if ( cplex.solve() ) {
				cplex.output().println("Solution status = " + cplex.getStatus());
				cplex.output().println("Solution value = " + cplex.getObjValue());
				cplex.output().println("Model is = " + cplex.getModel());

				double[] valLink = cplex.getValues(link_selected);
				int index = 0;
				for (int j = 0; j < Edge.length; ++j){
					if( valLink[j] == 1 ){
						send_load_from_links[index] =  Edge[j];
						index++;
					}	
				}
				double[] valServer = cplex.getValues(server_selected);
				for (int j = 0; j < activeServers.length; ++j){
					if( valServer[j] == 1 )
						send_load_to_server =  activeServers[j];	
				}				
			}
//			if(!send_from_interface)
//				cplex.exportModel("mf.lp");			
			long stopTime = System.currentTimeMillis();
			long elapsedTime = stopTime - startTime;			
			cplex.end();
			
			String eachElapsedTime = "elapsed time is: "+Long.toString(elapsedTime) + " milisecond";
//			String eachInput = "sender is: "+Sender + ", CPU Load is: "+doubleToString(CPULoad)+", RAM Load is: "+doubleToString(RAMLoad)+", DISK Load is: "+doubleToString(DISKLoad)+", TCP Conn No is: "+doubleToString(TCPConnNo)+ ", Link Load is: "+doubleToString(LinkLoad);
			String eachServer = "Server "+send_load_to_server+" is Selected";
			String eachLink = "Best Path is: "+Sender+"->";

			//			for (int i = 0; i < send_load_from_links.length; i++) {
//				if(send_load_from_links[i][0] != 0){				
//					else{
//						for (int j = 0; j < send_load_from_links[i].length; j++) {
//							System.out.println(send_load_from_links[i][j]);
//						}
//						System.out.println("-------------------");
//					}
//				}
//			}
//			cplex.output().println("Server "+send_load_to_server+" is Selected.");
						
			int nowSwitch = Sender;
			boolean end = false;
			while (!end) {
				for (int i = 0; i < send_load_from_links.length; i++) {
					if(send_load_from_links[i][0] != 0){
						if ( nowSwitch == send_load_from_links[i][0] && send_load_from_links[i][1] == send_load_to_server ){
							eachLink += send_load_from_links[i][1];
							end = true;
						}
						else if(nowSwitch == send_load_from_links[i][0]){
							eachLink += send_load_from_links[i][1]+"->";
							nowSwitch = send_load_from_links[i][1];
						}	
					}
				}
			}
			
			if(!send_from_interface){
				JSONArray nodes = new JSONArray();
				for (int i = 0; i < Nodes.length; i++) {
					nodes.add(Nodes[i]);
				}
				JSONObject links = new JSONObject();
				for (int i = 0; i < Edge.length; i++) {
					JSONObject temp = new JSONObject();
					temp.put("0", Edge[i][0]);
					temp.put("1", Edge[i][1]);
					temp.put("2", (int)LinkLoad[i]);
					links.put(i,temp);
				}	
				
				JSONArray activeS = new JSONArray();
				for (int i = 0; i < activeServers.length; i++) {
					activeS.add(activeServers[i]);
				}
				JSONArray activeL = new JSONArray();
				for (int i = 0; i < send_load_from_links.length; i++) {
					if(send_load_from_links[i][0] != 0){						
						JSONArray temp = new JSONArray();
						temp.add(send_load_from_links[i][0]);
						temp.add(send_load_from_links[i][1]);
						activeL.add(temp);
					}
				}
				
				String eachRun = "<fieldset><legend>Run "+(runIndex+1)+":</legend><center><table style='border: double;border-radius: 4px;border-color: blue;border-width: 1px;'><tr><td style='border: solid;border-radius: 4px;border-color: blue;border-width: 1px;'>"+eachServer+"</td>"
						+ "<td style='border: solid;border-radius: 4px;border-color: blue;border-width: 1px;'>"+eachLink+"</td><td style='border: solid;border-radius: 4px;border-color: blue;border-width: 1px;'>"+eachElapsedTime+"</td></tr></table><br/>"
								+ "<div style='text-align:center;'> Sender is: "+Sender+"</div><br/><div style='border:solid;' id='map"+runIndex+"'><br/></div><table border='1'><tr><th>Server No</th><th>CPU Load</th><th>RAM Load</th><th>Disk Load</th><th>TCP Conn No</th></tr><tr>";
				for (int i = 0; i < activeServers.length; i++) {
					eachRun += "<td>"+activeServers[i]+"</td>";
					eachRun += "<td>"+CPULoad[i]+"</td>";
					eachRun += "<td>"+RAMLoad[i]+"</td>";
					eachRun += "<td>"+DISKLoad[i]+"</td>";
					eachRun += "<td>"+TCPConnNo[i]+"</td></tr><tr>";
				}
				eachRun += "</tr></table><br/><div style='color:red' title='delete link table' onclick='deleteLinkTable("+runIndex+")' id='deleteNotation"+runIndex+"'>X</div><table border='1' id='linkTable"+runIndex+"'><tr><th>Link No</th><th>Link Load</th></tr><tr>";
				for (int i = 0; i < LinkLoad.length; i++) {
					eachRun += "<td>"+Edge[i][0]+" -> "+Edge[i][1]+"</td>";
					eachRun += "<td>"+LinkLoad[i]+"</td></tr><tr>";
				}
				eachRun += "</tr></table><br/></center></fieldset><script>load_events("+runIndex+","+links+","+nodes+","+activeS+","+Sender+","+send_load_to_server+","+activeL+");</script><br/>";
			
				try(FileWriter fw = new FileWriter("Output/result.html", true);
					    BufferedWriter bw = new BufferedWriter(fw);
					    PrintWriter out = new PrintWriter(bw))
				{
				    out.println(eachRun);
				} catch (IOException e) {
				    e.printStackTrace();
				}
//				eachRun += eachInput + " - " +eachServer +" - "+eachLink + " - "+eachElapsedTime + "\n------------------------------------------------------------------------------------------------------------------------------------\n";
				
			}
			else{
				serverLbl.setText(eachServer);
				LinkLbl.setText(eachLink);
			}
			
			
		} catch (IloException ex) {
	         System.out.println("Concert Error: " + ex);
	      }
	      catch (InputDataReader.InputDataReaderException ex) {
	         System.out.println("Data Error: " + ex);
	      }
	      catch (java.io.IOException ex) {
	         System.out.println("IO Error: " + ex);
	      }		
	}
	
	/**
	 * for generate random value of link and server load
	 * @param random
	 * @param min
	 * @param max
	 * @return
	 */
	public static double randomInRange(Random random, double min, double max) {
	  random = new Random();
	  double range = max - min;
	  double scaled = random.nextDouble() * range;
	  double shifted = scaled + min;
	  return shifted;
	}
	
	public static String doubleToString(double[] input){
		String outString = "[";
		for (int i = 0; i < input.length; i++) {
			if( i+1 < input.length )
				outString += input[i]+",";
			else
				outString += input[i]+"]";
		}
		return outString;
	}
	
	/**
	 * read data needs to run loadBalancing Algorithm
	 * 	Nodes
	 * 	Edges
	 *  Active Servers
	 *  Sender Switch
	 *  Link Capacity
	 *  Link Load
	 *  CPU Capacity
	 *  RAM Capacity
	 *  Disk Capacity
	 *  TCP Connection Handle
	 *  CPU Load
	 *  RAM Load
	 *  Disk Load
	 *  TCP Connection Number
	 *  Coefficient that need to normal all metrics for servers
	 *  coefficient that specify the request needs what resource
	 * @param filename
	 * @throws IloException
	 * @throws java.io.IOException
	 * @throws InputDataReader.InputDataReaderException
	 * @author m.farhoudi
	 */
	public static void readData(String filename) throws IloException, java.io.IOException, InputDataReader.InputDataReaderException {
		InputDataReader reader = new InputDataReader(filename);
		Nodes  					= reader.readIntArray();
		Edge  					= reader.readIntArrayArray();
		
		activeServers 			= reader.readIntArray();
		Sender  				= reader.readInt();
		
		LinkCapacity			= reader.readDoubleArray();
		LinkLoad  				= reader.readDoubleArray();
		
		CPUCapacity  			= reader.readDoubleArray();
		RAMCapacity	  			= reader.readDoubleArray();
		DISKCapacity	  		= reader.readDoubleArray();
		TCPConnHandle  			= reader.readDoubleArray();
		
		CPULoad  				= reader.readDoubleArray();
		RAMLoad  				= reader.readDoubleArray();
		DISKLoad  				= reader.readDoubleArray();
		TCPConnNo  				= reader.readDoubleArray();
		
		coefficientOfCost  	  	= reader.readDoubleArray();
		coefficientOfReqType  	= reader.readDoubleArray();
		coefficientOfLinkCost 	= reader.readInt();
	}
	
	/**
	 * add decision variable & objective function & constraint
	 * @author m.farhoudi
	 */	
	public static void createModel(){
		try {
			/*  set decision variable */
			link_selected = cplex.boolVarArray(Edge.length);
			server_selected = cplex.boolVarArray(activeServers.length);

			double lb = 0.0;
			double ub = Double.MAX_VALUE;
			IloNumVar t = cplex.numVar(lb, ub);
						
			/*  set objective function */
			double remainCapacities;
			IloLinearNumExpr objExpr = cplex.linearNumExpr();
			
			//add link objective function: {4 * t}
			objExpr.addTerm(coefficientOfLinkCost, t);
			
			//add server objective function: { sum <u> in N: server_selected[i]/(...)^2 }
			for (int i = 0; i < activeServers.length; i++) {				
				remainCapacities = (1 / Math.pow( 
						coefficientOfCost[0]*coefficientOfReqType[0]*(CPUCapacity[i]*(1-CPULoad[i]))+
						coefficientOfCost[1]*coefficientOfReqType[1]*(RAMCapacity[i]-RAMLoad[i])+
						coefficientOfCost[2]*coefficientOfReqType[2]*(DISKCapacity[i]-DISKLoad[i])+
						coefficientOfCost[3]*coefficientOfReqType[3]*(TCPConnHandle[i]-TCPConnNo[i]) 
						, 2) );
				objExpr.addTerm(server_selected[i],remainCapacities);
			}
			cplex.addMinimize(objExpr);
			
			
			/*  set constraint */
			
			//t >= ( link_selected[u,v] / ( (LinkCapacity[u,v]-LinkLoad[u,v]) ^ 2 ))
			for (int i = 0; i < Edge.length; i++) {
				remainCapacities = (1 / Math.pow( LinkCapacity[i] - LinkLoad[i] , 2) );
				cplex.addGe(t, cplex.prod(link_selected[i], remainCapacities));				
			}

			
			//flow conservation for single path (if server_selected is 1 then this server is target, otherwise is 0)
			for (int n = 0; n < Nodes.length; n++) {
				int [] inputs = new int[Edge.length];
				int [] outputs = new int[Edge.length];
				for (int i = 0; i < Edge.length; i++) {
					inputs[i] = 0;
					outputs[i] = 0;
					if(Nodes[n] == Edge[i][0])
						inputs[i] = 1;
					if(Nodes[n] == Edge[i][1])
						outputs[i] = 1;
				}

				if(Nodes[n] == Sender){
					cplex.addEq( cplex.diff(cplex.scalProd(inputs, link_selected), cplex.scalProd(outputs, link_selected)), 1);
				}
				else{					
					boolean match = false;
					for (int s = 0; s < activeServers.length; s++) {
						if(Nodes[n] == activeServers[s]){
							match = true;
							cplex.addEq( cplex.diff(cplex.scalProd(inputs, link_selected), cplex.scalProd(outputs, link_selected)), cplex.prod(-1, server_selected[s]));
						}
					}					
					if(!match)
						cplex.addEq( cplex.diff(cplex.scalProd(inputs, link_selected), cplex.scalProd(outputs, link_selected)), 0);					
				}
				
			}
			
			// only one server should be selected
			cplex.addEq( cplex.sum(server_selected), 1);
			
			//if server is not selected, all the link connected to server should not be selected & just one link to server (there is path to server)
			for (int i = 0; i < activeServers.length; i++) {
				int [] inputs = new int[Edge.length];
				int [] outputs = new int[Edge.length];
				for (int j = 0; j < Edge.length; j++) {
					inputs[j] = 0;
					outputs[j] = 0;
					if(Edge[j][0] == activeServers[i])
						inputs[j] = 1;
					if(Edge[j][1] == activeServers[i])
						outputs[j] = 1;
				}
				cplex.addLe( cplex.scalProd(inputs, link_selected), server_selected[i]);
				//TODO: may be need output!!
			}

			
			
		} catch (IloException e) {
			System.out.println("Concert Error: " + e);
		}
	}
	
	public static void writeOutputToFiles(int numberOfRun,long elapsedTime){
		String fullElapsedTime = "Number of Request is: "+numberOfRun+ " \n"+ 
				"Total Time is: "+Long.toString(elapsedTime)+ " milliseconds \n"+
				"Time For each Request is: "+Long.toString(elapsedTime/numberOfRun)+ " milliseconds \n"+
				"Throughput(Request per Second) is: "+(numberOfRun*1000)/elapsedTime;
		PrintWriter timeOut;
		try {
			timeOut = new PrintWriter("Output/elapsedTime.txt");
			timeOut.println(fullElapsedTime);
			timeOut.close() ;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		
		
		
		try(FileWriter fw = new FileWriter("Output/result.html", true);
			    BufferedWriter bw = new BufferedWriter(fw);
			    PrintWriter out = new PrintWriter(bw))
		{
		    out.println("</body></html>");
		} catch (IOException e) {
		    e.printStackTrace();
		}
		
		
		
		try(FileWriter fw = new FileWriter("Output/excel.txt", true);
			    BufferedWriter bw = new BufferedWriter(fw);
			    PrintWriter out = new PrintWriter(bw))
		{
		    out.println(numberOfRun + "," + elapsedTime + "," + elapsedTime/numberOfRun + "," +(numberOfRun*1000)/elapsedTime);
		} catch (IOException e) {
		    e.printStackTrace();
		}
		
		
	}
	
	public static void writeInoutToFiles(){
		PrintWriter resultOut;
		try {
			String eachRun = "<html><head><title>Result Page</title><style>legend{text-shadow: 5px 5px 5px #FF0000;}</style><script type='text/javascript'>function deleteLinkTable(tableNumber){document.getElementById('linkTable'+tableNumber).style.display = 'none';document.getElementById('deleteNotation'+tableNumber).style.display = 'none';}</script>"
					+ "<script type='text/javascript' src='script/jquery.min.js'></script>"
					+ "</script><script type='text/javascript' src='script/d3.min.js'></script>"
					+ "<script type='text/javascript' src='script/bootstrap.min.js'></script><script type='text/javascript'>"
					+ "var svg, container, force, rect, graphLink, margin, width, color, zoom, drag, defaultGravity = 0, detailOpen = false, spinner;"
					+ "var node={}, Nodes=[], dstNodes=[], ipNodes=[], Links=[],uniquePorts=[], dst_ports=[], link={}, graph={}, linkedByIndex = {}, scaleLevel = 1, mouseTranslate = '5,5';"
					+ "var expanded_ips = [];var dragInitiated = false;"
					+ "function load_events(run_index, mapper, javaNodes, activeServers, Sender, selected_server, selected_link) {$('#map'+run_index).html('');var index = 0;var dst_array = $.map(javaNodes, function (value, index) {"
					+ "return [value];});var mapper_array = $.map(mapper, function (value, index) {return [value];});var activeServer_array = $.map(activeServers, function (value, index) {return [value];});"
					+ "var mydetails='';var dst_names= [];for( i=0;i<dst_array.length;i++){var count = '';var namee = dst_array[i];dst_names.push(namee);"
					+ "if(Sender == dst_array[i] || selected_server == dst_array[i]){node={'name':'1'+i.toString(),'title': namee , 'mytitle' : dst_array[i], 'count' : count,'id':'1'+i.toString()+run_index,'level':1,'color':'blue','index':index, 'shape':25,'class':'dstIPs','width':15};}else{var key = $.inArray(dst_array[i],activeServer_array);if(key != -1)node={'name':'1'+i.toString(),'title': namee , 'mytitle' : dst_array[i], 'count' : count,'id':'1'+i.toString()+run_index,'level':1,'color':'red','index':index, 'shape':25,'class':'dstIPs','width':15};else node={'name':'1'+i.toString(),'title': namee , 'mytitle' : dst_array[i], 'count' : count,'id':'1'+i.toString()+run_index,'level':1,'color':'#009900','index':index, 'shape':25,'class':'dstIPs','width':15};}"
					+ "dstNodes.push(node);Nodes.push(node);index++;}var flat_mapper = [];for(var x=0;x < mapper.length; x++){if( (typeof mapper[x] !== 'undefined') )flat_mapper[x] = mapper[x][0]+mapper[x][1];}"
					+ "mapper_array.forEach(function(sen){var match = false;selected_link.forEach(function(link){if( sen['0'] == link[0] && sen['1'] == link[1])match = true;});link={'source':Nodes[sen['0']-1],'target':Nodes[sen['1']-1],'match':match,'load':sen['2']};Links.push(link);});graph.nodes=Nodes;graph.links=Links;"
					+ "margin = {top: -5, right: -5, bottom: -5, left: -5};width = $(window).width()*75/100 - margin.left - margin.right,height = 620- margin.top - margin.bottom;zoom = d3.behavior.zoom().scaleExtent([1, 15]).on('zoom', zoomed);"
					+ "forceGravity(defaultGravity);color = d3.scale.category20();createContainer(run_index);update(graph.nodes, graph.links,run_index);"
					+ "}"
					+ "function forceGravity(gravity){force = d3.layout.force().gravity(gravity).charge(-200).linkDistance(50).size([width + margin.left + margin.right, height + margin.top + margin.bottom]);}"
					+ "function createContainer(run_index){drag = d3.behavior.drag().origin(function(d) { return d; }).on('dragstart', dragstarted).on('drag', dragged).on('dragend', dragended);"
					+ "svg = d3.select('#map'+run_index).append('svg').attr('width', function(){return '1000px';}).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left+ ',' +margin.left+ ')').call(zoom);"
					+ "rect = svg.append('rect').attr('width', width).attr('height', height).style('fill', 'none').style('pointer-events', 'all');container = svg.append('g');"
					+ "container.append('defs').append('marker').attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 0).attr('refY', 0).attr('markerUnits', 'strokeWidth').attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5');if(scaleLevel != 1){container.attr('transform', 'translate(' + mouseTranslate + ')scale('+scaleLevel+')');}"
					+ "}"
					+ "function update(upNodes, upLinks,run_index){force.nodes(upNodes).links(upLinks).start();var linkG = container.append('g').attr('class', 'links').selectAll('.link').data(upLinks).enter().append('g').attr('class', 'link');graphLink = linkG.append('line').attr('id', function(d){return 'link'+d.target.id+'-'+d.source.id+','+run_index;}).attr('marker-end', function(d){return 'url(#arrowhead)';}).style('stroke-width', function (d) {if(!d.match)return '0.7px';else return '1.5px';}).style('stroke', function (d) {if(!d.match)return '#555';else return 'blue';}).style('stroke-opacity', function (d) {if(!d.match)return '0.5';else return '0.99';});"
					+ "var lnktxt = linkG.append('svg:text').attr('class', 'nodetext').attr('x', function(d) { return (d.source.x + d.target.x)/2; }).attr('y', function(d) { return (d.source.y + d.target.y)/2; }).attr('fill',function(d){if(!d.match) return '#CC6600';else return 'blue' }).attr('text-anchor', 'middle').style('font-size', '11px').style('text-decoration', 'underline').text(function(d) { return d.load }).style('background-color','red');"
					+ "node = container.append('g').attr('class', 'nodes').selectAll('.node').data(upNodes).enter().append('g').attr('class', 'node').attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; }).call(drag);node.append('rect').attr('width', function(d) { return d.width }).attr('height', function(d) { return d.width }).attr('border','solid 1px black').attr('r', function(d) { return (4-d.level) * 2; }).style('fill', function(d) { return d.color ; }).style('stroke', 'black').attr('rx',function(d){return d.shape;}).attr('ry',function(d){return d.shape;}).attr('class',function(d){return d.class;}).attr('text',function(d){return d.title;}).attr('id',function(d){return 'nodes-'+d.id+'-'+run_index;}).style('stroke-width', 0);"
					+ "node.append('svg:text').attr('class', 'nodetext').attr('dx', 10).attr('dy', '-0.30em').attr('fill','blue').attr('text-anchor', 'middle').style('font-size', '12px').style('text-decoration', 'underline').text(function(d) { return d.count }).style('background-color','red');"
					+ "node.append('text').attr('x', 12).attr('dy', '1.45em').text(function(d) { return d.title; });"
					+ "force.on('tick', function() {"
					+ "graphLink.attr('x1', function(d) { return (d.source.x)+4; }).attr('y1', function(d) { return (d.source.y)+5; }).attr('x2', function(d) {var ekhtelafX = d.target.x - d.source.x;var ekhtelafY = d.target.y - d.source.y;if(d.target.class == 'dstPort'){if( ( -30 < ekhtelafX && ekhtelafX < 30 )  && ( -30 < ekhtelafY && ekhtelafY < 30 ) ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+14;else return (d.target.x)+2;}else{if(d.target.x < d.source.x)return (d.target.x)+12;else return (d.target.x)-2;}}"
					+ "else if(  -30 < ekhtelafY && ekhtelafY < 30  ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+16;else return (d.target.x)-3;}else{if(d.target.x < d.source.x)return (d.target.x)+16;else return (d.target.x)-4;}}else if( -30 < ekhtelafX && ekhtelafX < 30 ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+9;else return (d.target.x)+5;}else{if(d.target.x < d.source.x)return (d.target.x)+8;else return (d.target.x)+6;}}"
					+ "else{if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+13;else return (d.target.x)-2;}else{if(d.target.x > d.source.x)return (d.target.x)-1; else return (d.target.x)+15;}}}else{if( ( -30 < ekhtelafX && ekhtelafX < 30 )  && ( -30 < ekhtelafY && ekhtelafY < 30 ) ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+17;else return (d.target.x);}"
					+ "else{if(d.target.x < d.source.x)return (d.target.x)+15;else return (d.target.x)-2;}}else if(  -30 < ekhtelafY && ekhtelafY < 30  ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+19;else return (d.target.x)-3;}else{if(d.target.x < d.source.x)return (d.target.x)+19;else return (d.target.x)-4;}}else if( -30 < ekhtelafX && ekhtelafX < 30 ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+9;else return (d.target.x)+5;}else{if(d.target.x < d.source.x)return (d.target.x)+8;else return (d.target.x)+6;}}else{if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.x)+13;else return (d.target.x)-2;}else{if(d.target.x > d.source.x)return (d.target.x)-1;else return (d.target.x)+15;}}}})"
					+ ".attr('y2', function(d) {var ekhtelafX = d.target.x - d.source.x;var ekhtelafY = d.target.y - d.source.y;if(d.target.class == 'dstPort'){if( ( -30 < ekhtelafX && ekhtelafX < 30 )  && ( -30 < ekhtelafY && ekhtelafY < 30 )){if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)+1;else return (d.target.y)-1;}else{if(d.target.x < d.source.x)return (d.target.y)+14;else return (d.target.y)+14;}}else if(  -30 < ekhtelafY && ekhtelafY < 30  ){if(d.target.y > d.source.y){if(d.target.x < d.source.x)return (d.target.y)+5;else return (d.target.y)+5;}else{if(d.target.x < d.source.x) return (d.target.y)+9;else return (d.target.y)+7;}}"
					+ "else if( -30 < ekhtelafX && ekhtelafX < 30 ){if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)-4;else return (d.target.y)-4;}else{if(d.target.x < d.source.x) return (d.target.y)+16;else return (d.target.y)+16;}}else{if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)-2;else return (d.target.y);}else{if(d.target.x > d.source.x) return (d.target.y)+13;else return (d.target.y)+12;}}}"
					+ "else{if( ( -30 < ekhtelafX && ekhtelafX < 30 )  && ( -30 < ekhtelafY && ekhtelafY < 30 )){if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)+1; else return (d.target.y)-1;}else{if(d.target.x < d.source.x) return (d.target.y)+14;else return (d.target.y)+14;}}else if(  -30 < ekhtelafY && ekhtelafY < 30  ){if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)+5;else return (d.target.y)+5;}else{if(d.target.x < d.source.x) return (d.target.y)+9;else return (d.target.y)+7;}}"
					+ "else if( -30 < ekhtelafX && ekhtelafX < 30 ){if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)-4;else return (d.target.y)-4;}else{if(d.target.x < d.source.x) return (d.target.y)+19;else return (d.target.y)+19;}}else{if(d.target.y > d.source.y){if(d.target.x < d.source.x) return (d.target.y)-2;else return (d.target.y);}else{if(d.target.x > d.source.x) return (d.target.y)+15;else return (d.target.y)+15;}}}});"
					
//					+ "lnktxt.attr('x', function(d) { return (d.source.x+(d.source.x + d.target.x)/2)/2; }).attr('y', function(d) { return (d.source.y+(d.source.y + d.target.y)/2)/2; });"
					+ "lnktxt.attr('x', function(d) { return (d.source.x + d.target.x)/2; }).attr('y', function(d) { return (d.source.y + d.target.y)/2; });"
					
					+ "node.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });"
					+ "});"
					
					+ "graph.links.forEach(function(d) {linkedByIndex[d.source.index + ',' + d.target.index] = 1;});"
					+ "}"
					+ "function dragstarted(d) {if (d3.event.sourceEvent.which == 1){dragInitiated = true;d3.event.sourceEvent.stopPropagation();d3.select(this).attr('fixed',d.fixed= false);d3.select(this).classed('dragging', true);force.start();}else force.stop();}"
					+ "function dragged(d) {d3.select(this).attr('cx', d.x = d3.event.x).attr('cy', d.y = d3.event.y);}"
					+ "function dragended(d) {d3.select(this).classed('dragging', false);d3.select(this).attr('fixed', d.fixed = true);}"
					+ "function zoomed() {container.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');scaleLevel =  d3.event.scale;mouseTranslate = d3.event.translate;}"
					+ "</script></head><body>";
			resultOut = new PrintWriter("Output/result.html");
			resultOut.println(eachRun);
			resultOut.close() ;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) throws IloException, java.io.IOException, InputDataReader.InputDataReaderException {
//		new loadBalancing();
		
		writeInoutToFiles();	
		
		long nowStart = System.currentTimeMillis();
		int numberOfRun = 1;
		for (runIndex = 0; runIndex < numberOfRun; runIndex++) {
			runAlgorithm(false);	
		}
		long nowStop = System.currentTimeMillis();
		long elapsedTime = nowStop - nowStart;
		
		writeOutputToFiles(numberOfRun, elapsedTime);	
		Desktop.getDesktop().open(new File("Output/result.html"));
			
	}

}
