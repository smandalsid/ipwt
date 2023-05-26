<?php
$var = "Hello from variable";
echo $var;
echo "<p> " . $var . " wow " . " $var kuch bhi chal raha hai</p>";
$a=10;
$b=5;
echo "<p> ".$a+$b."</p>";

function func(){
    $x=5;
    echo "<p>".$x."</p>";
    echo "<p>".$GLOBALS['a']."</p>";
    echo "<p>".$GLOBALS['b']."</p>";
}
func();

echo "<p> ".$x."</p>";
echo "<p> ".$y."</p>";

function staticfunc(){
    static $s=0;
    echo "<p>".$s."</p>";
    $s++;
}


staticfunc();
staticfunc();
staticfunc();
echo "<p>".$s."</p>";

$ar=array("Siddharth", "Alpana");
var_dump($ar);

echo "<br>";

$lol=69;
echo ($lol+1)."<br>";

$lol="69";
echo ($lol+1)."<br>";

$lol="69"+1;
echo var_dump($lol)."<br>";

echo round(0.50)."<br>";

?>