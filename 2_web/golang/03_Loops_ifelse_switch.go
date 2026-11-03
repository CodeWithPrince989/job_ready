package main

func main() {
	var sum = 0
	for i := 0; i < 10; i++ {
		sum += i
	}

	println("Sum of first 10 numbers:", sum)
	rangeSum()
	switchCase()
}


func rangeSum() {
	var sum = 0
	for i := range 15 {
		sum += i
	}

	println("Sum of first 15 numbers:", sum)
}

func ifelse() {
	var a = 10
	if a%2 == 0 {
		println(a, "is even")
	}else {
		println(a, "is odd")
	}
}

func switchCase() {
	var day = 3
	switch day {
	case 1:
		println("Monday")
	case 2:
		println("Tuesday")
	case 3:
		println("Wednesday")
	case 4:
		println("Thursday")
	case 5:
		println("Friday")
	case 6:
		println("Saturday")
	case 7:
		println("Sunday")
	default:
		println("Invalid day")
	}
}