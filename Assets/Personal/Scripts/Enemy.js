#pragma strict
 
///Variables Declaration///
var player : Transform;
var enemy : Transform;
var speed : float;
 
 
///Inizialization///
function Start ()
{

}
 
 
///Fixed Update///
function FixedUpdate ()
{
    var moveLeft = enemy.position.x > player.position.x;
    var konstant = moveLeft ? -1: 1;
    enemy.position.x = enemy.position.x + konstant * 0.1;
}