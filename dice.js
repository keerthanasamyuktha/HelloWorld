var dice = {
	size:6,
	totalroll:0,	
	roll: function(){
		var diceroll = Math.ceil(this.size * Math.random())
		this.totalroll +=1;	
        console.log(this)		
	    return diceroll;		
		}
		
	
	
};
exports.game = dice;
