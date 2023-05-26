<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

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
        }

    ?>

    <form action="" method="post">
        <fieldset>
            <legend>Test Form</legend>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value="<?php echo $name;?>"><?php echo $nameer?><br><br>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="<?php echo $email;?>"><?php echo $emailer?><br><br>
            <label for="site">Website</label>
            <input type="text" id="site" name="site" value="<?php echo $website;?>"><?php echo $websiteer?><br><br>
            <label for="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10"><?php echo $comment;?></textarea><br><br>
            <label for="gender">Gender</label><br>
            <input type="radio" name="gender" id="male" value="male" <?php if (isset($gender) && $gender=="male") echo "checked";?>>
            <label for="male">Male</label><br>
            <input type="radio" name="gender" id="female" value="female" <?php if (isset($gender) && $gender=="female") echo "checked";?>>
            <label for="female">Female</label><br>
            <input type="radio" name="gender" id="others" value="others" <?php if (isset($gender) && $gender=="others") echo "checked";?>>
            <label for="others">Others</label><br><br>
            <input type="submit">
        </fieldset>
    </form>

    <?php
        echo $name;
        echo "<br>";
        echo $email;
        echo "<br>";
        echo $website;
        echo "<br>";
        echo $comment;
        echo "<br>";
        echo $gender;
        echo "<br>";
    ?>

</body>
</html>