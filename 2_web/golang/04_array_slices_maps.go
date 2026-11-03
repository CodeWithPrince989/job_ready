package main

import "fmt"

func main() {
	var a [5]int = [5]int{1, 2, 3, 4, 5}
	var sum = 0

	for i := range a {
		sum += a[i]
	}

	fmt.Println("Array:", a)
	fmt.Println("Sum:", sum)

	TwoDArray()
}

func TwoDArray() {
	var b [2][3]int = [2][3]int{{1, 2, 3}, {4, 5, 6}}
	var sum = 0

	for i := range b {
		for j := range b[i] {
			sum += b[i][j]
		}
	}

	fmt.Println("2D Array:", b)
	fmt.Println("Sum:", sum)
}
