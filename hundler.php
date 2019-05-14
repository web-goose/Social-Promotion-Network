<?
session_start();
  if($_POST['form_f'])
  {
    if($_POST['value'] == 'Facebook') include 'form/facebook.html';
    elseif($_POST['value'] == 'Instagram') include 'form/instagram.html';
    elseif($_POST['value'] == 'Youtube') include 'form/youtube.html';
    elseif($_POST['value'] == 'Twitter') include 'form/twitter.html';
  }

  if($_POST['order_f']){
    if($_SESSION["utm_source"]) $utm .= "utm_source | ".$_SESSION["utm_source"]."\n";
    if($_SESSION["utm_medium"]) $utm .= "utm_medium | ".$_SESSION["utm_medium"]."\n";
    if($_SESSION["utm_campaign"]) $utm .= "utm_campaign | ".$_SESSION["utm_campaign"]."\n";
    if($_SESSION["utm_content"]) $utm .= "utm_content | ".$_SESSION["utm_content"]."\n";
    if($_SESSION["utm_term"]) $utm .= "utm_term | ".$_SESSION["utm_term"]."\n";

    $to = "social.network.promotion.snp@gmail.com";
    $subject = "Order";
    $from = "Social Network Promotion <root@social-network-promotion.com>";
    $charset = "utf-8";
    $headerss ="From: ".$from."\r\n";
    $headerss .="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "Service: ".$_POST["serviceName"]."\n";
    $msg .= "type: ".$_POST["type"]."\n";
    $msg .= "count: ".$_POST["number"]."\n";
    $msg .= "target: ".$_POST["target"]."\n";
    $msg .= "email: ".$_POST["email"]."| \n";
    $msg .= $utm."\n";
    if(mail($to, $subject, $msg, $headerss)) exit('Success');
  }

  if($_POST['contact_f'])
  {
    if($_SESSION["utm_source"]) $utm .= "utm_source | ".$_SESSION["utm_source"]."\n";
    if($_SESSION["utm_medium"]) $utm .= "utm_medium | ".$_SESSION["utm_medium"]."\n";
    if($_SESSION["utm_campaign"]) $utm .= "utm_campaign | ".$_SESSION["utm_campaign"]."\n";
    if($_SESSION["utm_content"]) $utm .= "utm_content | ".$_SESSION["utm_content"]."\n";
    if($_SESSION["utm_term"]) $utm .= "utm_term | ".$_SESSION["utm_term"]."\n";

    $to = "social.network.promotion.snp@gmail.com";
    $subject = "Contact";
    $from = "Social Network Promotion <root@social-network-promotion.com>";
    $charset = "utf-8";
    $headerss ="From: ".$from."\r\n";
    $headerss .="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "Name: ".$_POST["name"]."\n";
    $msg .= "Email: ".$_POST["email"]."\n";
    $msg .= "Message: ".$_POST["message"]."| \n";
    $msg .= $utm."\n";
    if(mail($to, $subject, $msg, $headerss)) exit('Success');
  }
?>
