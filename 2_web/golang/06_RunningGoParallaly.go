//No goroutines - Running on Single Thread

// package main

// import (
// 	"fmt"
// 	"time"
// )

// func expensiveOp(str string) {
// 	for i:= range 3 {
// 		fmt.Println(str, "-", i)
// 	}
// }

// func main() {
// 	expensiveOp("first")
// 	expensiveOp("Second")
// 	time.Sleep(time.Second*2)
// 	fmt.Println("Done")

// }

//with go routines -> if your machine allows it run parallely,
// if not then run concurrently

package main

import (
	"fmt"
	"time"
)

func expensiveOp(str string) {
	for i:= range 3 {
		fmt.Println(str, "-", i)
	}
}

func main() {
	expensiveOp("first")
	expensiveOp("Second")
	time.Sleep(time.Second*2)
	fmt.Println("Done")

}