//Unbuffered Channel

//Making a new Channel
ch := make(chan int)

//call a new go routines
go func() {
	var sum = 0
	for i := range 100 {
		sum += i
	}
	c<-sum
}









//Buffered Channel



//Channel Synchronization, Waitgroups