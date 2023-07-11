
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenTiles</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>


<div class="wrap">
    <div class="grid-container"> 
        <a href="index.php" class="logo">GreenTiles</a>
    </div>
    <div class="grid-container2">

        <div class=" form">
            <div class="box login">                    
                <form action="loginprocess.php" method="post"> 
                    <h2>
                        Login
                    </h2>
                    <?php if(isset($_GET['error'])) { ?>
                        <p class="error"><?php echo $_GET['error'];?></p>
                        <?php }?>    
                    <div class="inputb em">
                    <ion-icon class="alertm" name="alert-circle"></ion-icon>
                            <input type="email" name="email" placeholder="E-mail" id="email" onkeyup="validEmail()" required>
                        </div>
                        <div class="inputb pwd">
                        <ion-icon class="alertp" name="alert-circle"></ion-icon>

                            <input type="password" name="password" placeholder="Password" id="password" onkeyup="validpw()" required> <br>
                        </div>  
                    
                        <div class="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" onclick="check()" class="submit"> Login</button>
                        <div class="new">
                            <p>Don't have an account?
                                <a href="#" class="newsignup">Sign Up</a></p>
                        </div>
                </form>
            </div>
            <div class="box signup ">
                    <h2>
                        Sign Up
                    </h2>
                    <form action="signuprocess.php" method="post">
                        <div class="inputb em">
                        <ion-icon class="alertm2" name="alert-circle"></ion-icon>

                        <input type="email" name="email" placeholder="E-mail" id="email2" onkeyup="validEmail2()" required>
                        </div>
                        <div class="inputb pwd">
                        <ion-icon class="alertp2" name="alert-circle"></ion-icon>

                            <input type="password" name="password"  placeholder="Password" id="password2" onkeyup="validpw2()" required> 
                        </div>
                        <div class="pw2">                                       
                            <span>password must contain at least 8 characters</span></div>

                           
                            <div class="agree"><span class="star">*</span><label><input type="checkbox" class="checkbox"> I agree to the terms & conditions</label></div>
                        <button type="submit" onclick="check2()" class="submit2"> <span class="subintra">
                            <span class="subinter"></span>
                            <span class="subtext">Sign Up</span>
                        </span>
                    </button>
                        <div class="new">
                            <p>Already have an account?
                                <a href="#" class="newlogin">Login</a></p>
                        </div>
                    </form>
               </div>
        </div>
    </div>
</div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <script src="login.js"></script> 
        </body>
</html>