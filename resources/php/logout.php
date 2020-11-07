<?php

//logout.php

include('config.php');

//Reset OAuth access token
$google_client->revokeToken();
echo $_SESSION['token'];
//Destroy entire session data.
session_destroy($_SESSION['token']);

//redirect page to index.php
header('location:index.php');

?>