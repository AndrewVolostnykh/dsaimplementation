class HashMap {
	constructor(size = 16)
	{
		this.basicArray = new Array(size)
		this.sizeCounter = 0
				
	}
	
	size(){
		return this.sizeCounter
	}
	
	put(key, value){
		if(key == null || value == null)
		{
			return // here have to be exception
		}
		
		var index = this.getIndex(this.getHash(key))
		this.basicArray[index] = value // TODO: At this place, if we touch collision, in open addressing all collisions have to be saved in list
		
1		this.sizeCounter++
	}
	
	get(key){
		if(key == null)
		{
			return // here have to be exception
		}
		
		var index = this.getIndex(this.getHash(key))
		return this.basicArray[index]
	}
	
	remove(key){
		//if removed this.sizeCounter--
		if(key == null){ // for me this is incorrect validation
			return
		}
		//TODO: think about: if we had a collisions, and now we have list in one index of array, how to remove exactly interested item ?
	}
	
	getHash(key){ // this methos helps to view object as int value
		
		var hash = 0;
		var tempString = JSON.stringify(value)
		for (var i = 0; i < tempString.length; i++){
			var character = tempString.charCodeAt(i)
			hash = ((hash<<5)-hash)+character
			hash = hash&hash
		}
		
		return hash
	}
	
	getIndex(hash){ // this method helps to find our position in array 
		return hash % this.basicArray.length
	}
}

