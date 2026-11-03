package main

import "fmt"

type rect struct {
	width, height int
}

//value receiver
func (r rect) area() int {
	return r.width * r.height
}

//Pointer Receiver
type rect struct {
	width int 32
	height int 32
}
//Pinter receiver
func (r *rect) scale(factor int) {
	return r.height * rowidth
}

// function
func sum(a int, b int) int {
  return a+b
}

func multiply(n int) func(num int) int {
	return func(num int) int {
		return n * num
	}
}

func main() {
  r := rect{width: 10, height: 5}
  fmt.Print(r.area()) // Output: 50
}