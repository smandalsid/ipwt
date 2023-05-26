<?php

function proc($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$nameer=$emailer=$genderer=$websiteer="";


if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $name=proc($_POST["name"]);
    $email=proc($_POST["email"]);
    $website=proc($_POST["site"]);
    $comment=proc($_POST["comment"]);
    $gender=proc($_POST["gender"]);

    if(empty($name))
    {
        $nameer="Enter Name";
    }
    else
    {
        if(!preg_match("/^[a-zA-Z-' ]*$/",$name))
        {
            $nameer="Enter valid name";
        }
    }

    if(empty($email))
    {
        $emailer="Enter Email";
    }
    else
    {
        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $emailer="Enter valid email";
        }
    }

    if(empty($website))
    {
        $websiteer="Enter Website";
    }
    else
    {
        if(!preg_match("/^[a-z]{3}[.][a-z]+[.][a-z]+$/",$website))
        {
            $websiteer="Enter valid website";
        }
    }

    if(empty($gender))
    {
        $genderer="Enter Gender";
    }

    echo $name;
    echo "<br>";
    echo $emailer;
    echo "<br>";
    echo $websiteer;
    echo "<br>";
    echo $genderer;
    echo "<br>";    
}

?>
