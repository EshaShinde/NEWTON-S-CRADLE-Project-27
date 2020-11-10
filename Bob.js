class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.2,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
	//	this.y=400;
		this.r=r
    this.body=Bodies.circle(this.x, 450, this.r/2, options)
   // this.image = loadImage("sprites/paper.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
		//	this.body.position.x = World.mouseX	
		//	this.body.position.y = World.mouseY
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}