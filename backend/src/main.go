package main

import (
	"fmt"
	"configs"
	"searchmod"
	"os"
	"log"
	"net/http"
)

func main() {
	curDir, err := os.Getwd();
	if err != nil {
		log.Printf("Can not get dir %v ", err)
	}
	config := configs.GetConf(curDir+"/conf/config.yaml")

	fmt.Printf("Listen to %s\n",config.Host+config.Port)

	searchmod.SearchCore()
	http.ListenAndServe(config.Host+config.Port, nil)
}
