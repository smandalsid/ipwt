<?php
// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

$q=$_REQUEST["q"];

$hint="";

if($q!=="")
{
    $q=strtolower($q);
    $len=strlen($q);
    foreach($a as $n)
    {
        if(stristr($q, substr($n, 0, $len)))
        {
            if($hint==="")
            {
                $hint=$n;
            }
            else
            {
                $hint.=", $n";
            }
        }
    }
}
echo $hint === "" ? "no suggestion" : $hint;
?>