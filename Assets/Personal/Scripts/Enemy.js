#pragma strict
 
///Variables Declaration///
var player : Transform;
var enemy : Transform;
var speed : float;
var hit : boolean;
 
 
///Inizialization///
function Start ()
{
	hit = false;
}
 
 
///Fixed Update///
function FixedUpdate ()
{
    var moveLeft = enemy.position.x > player.position.x;
    var konstant = moveLeft ? -1: 1;
    enemy.position.x = enemy.position.x + konstant * 0.1;

    var distanceX = enemy.position.x - player.position.x;
    var distanceY = enemy.position.y - player.position.x;
    
    var isCloseX = distanceX < 0.5 && distanceX > -0.5;
    var isCloseY = distanceY < 0.5 && distanceY > -0.5;

    //if (Mathf.Round(enemy.position.x) == Mathf.Round(player.position.x) && Mathf.Round(player.position.y) < 11 && !hit){
    if (isCloseX && isCloseY && !hit){
    	hit = true;
    	var i=0;
    	var m = 0.1F;
    	while (i < 10)
		{
			player.localScale += new Vector3((i*m), (i*m), 0);
			i++;
		}
		if(i == 10) {
			hit = false;
			player.position.x = -5.146368;
			player.position.y = 20;

			player.localScale = new Vector3(1.771533, 1.771533, 0);

			enemy.position.x = 10.146368;
			enemy.position.y = 20;

		}
    }
}