package main

import (
	"configs"
	"database/sql"
	_ "github.com/lib/pq"
	"fmt"
	"log"
	"net/http"
	"os"
	"searchmod"
	"text/template"
	"bytes"
)

func main() {
	curDir, err := os.Getwd();
	if err != nil {
		log.Printf("Can not get dir %v ", err)
	}
	config := configs.GetConf(curDir+"/conf/config.yaml")

	fmt.Printf("Listen to %s\n",config.Host+config.Port)

	db := connectToDb(config)

	searchmod.SearchCore(&config, db)
	http.ListenAndServe(config.Host+config.Port, nil)
}

func connectToDb(config configs.Configs) *sql.DB{
	tmpl, err := template.New("DBConnect").Parse("postgres://{{.Login}}:{{.Password}}@localhost/postgres?sslmode=disable")
	if err != nil {
		log.Println(err)
	}
	var tpl bytes.Buffer
	if err := tmpl.Execute(&tpl, config); err != nil {
		log.Println(err)
	}
	connStr := tpl.String()
	database, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Println(err)
	}
	fmt.Println("Connected to database")
	return database
}
