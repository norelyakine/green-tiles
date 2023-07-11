<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenTiles</title>
    <link rel="stylesheet" href="tiles.css">
</head>
<body>
    
    <div class="header">
        <a href="index.php" class="logo">GreenTiles</a>
        
        <input type="text"  onkeyup="search()"  placeholder="Search.." class="searchbar">
        
            <div>
                           
           <a href="cart"><ion-icon name="cart" class="iconcart"></ion-icon></a>    
               <div class="box menu">
                    <ion-icon class="iconmenu" name="menu"></ion-icon>
                        <div class="dropdown">
                            <a class="width-bt border-btm1" href="user" >
                                <ion-icon class="icon user" name="person-circle"></ion-icon><span class="text"> User Profile</span>
                            </a>
                            <a class="border-btm1 bt1" href="#"><ion-icon class="icon set" name="settings"></ion-icon><span class=" setxt"> Settings</span></a>
                         
                           
                            
                            <a class="border-btm1" href="#"><ion-icon class="icon lg" name="log-out"></ion-icon><span class="text">Logout</span></a>
                        </div></div>
            
        </div></div>
   
    <div class="navbar2 ">
               
        <ul>
            <li class="underline"> <button type="button" class="filter" data-filter="all">ALL</button></li>         
            <li class="underline"> <button type="button" class="filter" data-filter="indoor">INDOOR</button></li> 
            <li class="underline"> <button type="button" class="filter" data-filter="office">OFFICE</button></li> 
            <li class="underline"> <button type="button" class="filter" data-filter="terrace">TERRACE</button></li> 


        </ul>

    </div>

    <section class="catalog">
       
        <div class="container">
            <article class="onebox">
                <ion-icon name="cart" class="ct"></ion-icon>
                <ion-icon name="heart" class="heart"></ion-icon>
                <img src="sofa4.jpeg" alt="image">
                <h4> Sage Sofa</h4>
                <h5>1020.00</h5>
            </article>
           
        </div>
    </section>





    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
   <script src="tiles.js"></script>

</body>
</html>