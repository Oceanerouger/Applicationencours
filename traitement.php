<?php

$entreprise1 = $_POST["entreprise1"];
 $entreprise2 = $_POST["entreprise2"];
 $entreprise3 = $_POST["entreprise3"];
               try{
                   //On se connecte à la BDD
                   $bdd = new PDO("mysql:host=localhost;dbname=applicationCfa",'root','root');
                   $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
               

                                
                   //On insère les données reçues
                   $bdd = $bdd->prepare("INSERT INTO classement(entreprise1,entreprise2,entreprise3)
                       VALUES(:entreprise1, :entreprise2, :entreprise3)");
           
                   $bdd->bindValue(':entreprise1',$entreprise1);
                   $bdd->bindValue(':entreprise2',$entreprise2);
                   $bdd->bindValue(':entreprise3',$entreprise3);
                   
                   
                   $bdd->execute(array(
                    ':entreprise1' => $entreprise1,
                    ':entreprise2' => $entreprise2,
                    ':entreprise3' => $entreprise3));
                   //On renvoie l'utilisateur vers la page de remerciement
                   header("Location:atelier2.php");
               }
               catch(PDOException $e){
                   echo 'Veuillez remplir tous les champs. Erreur : '.$e->getMessage();
               }
              

?>
 