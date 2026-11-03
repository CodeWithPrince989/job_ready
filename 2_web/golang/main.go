package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println(rand.Intn(100))
    fmt.Println(rand.Intn(100))
    fmt.Println(rand.Intn(100))
    var n = rand.Intn(1000)
    fmt.Println(n)
}