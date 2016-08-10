<?php
	 $ip = isset($_GET['ip'])?$_GET['ip']:''; 
	 $dns = isset($_GET['dns'])?$_GET['dns']:''; 
	 $gate = isset($_GET['gate'])?$_GET['gate']:''; 
	 // $dns = $_GET['dns'] || ''
	 // $gate = $_GET['gate'] || '';; 
     $a=array();
	 $a['ip']=$ip;
	 $a['dns']=$dns;
	 $a['gate']=$gate;
     echo json_encode($a);
?>