const mainUser = {
	firstName: 'Alexey',
	nickName: 'ubistrul',
	yearBorn: 1989,

	getAgePrimitive () 
	{ return new Date().getFullYear() - this.yearBorn; },

	beyondJesusLifespan () 
	{ return this.getAgePrimitive() > 33; },

	isWTFAge () 
	{	if ( this.beyondJesusLifespan() ) 
	{	return 'Bro WTF, u are a LEGEND!!!';}
	else 
	{ return 'Bro, you\'re still a kid, relax & grow up!'; }
	}

}; 

mainUser.getAgePrimitive(); //
mainUser.beyondJesusLifespan(); //
mainUser.broWTF(); //



