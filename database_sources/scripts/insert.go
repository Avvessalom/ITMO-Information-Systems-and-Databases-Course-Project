package main

import (
	"fmt"
	"encoding/json"
	"html/template"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

type Request struct{
	Table_name string;
	Fields []Field_container;
	Data []string;
	Dependency []Depend;
}

type Depend struct{
	Dep string;
	Dependent string;
}

type Field_container struct{
	Field string;
	Type string;
}

var (
	logfile, _ = os.Open("./log.txt")
	logger = log.New(logfile, "db_test_generator", log.LstdFlags|log.Lshortfile)
	alphabet []string = []string{}
	tables []Request = []Request{}
	dependencies map[string]int = make(map[string]int)
	n, _ = strconv.Atoi(os.Args[1])
)

func main() {
	rand.Seed(time.Now().UnixNano())
	var template_str string = "insert into {{.Table_name}}({{range .Fields}}{{.Field}}{{end}}) values {{range .Data}}\n\t{{.}}{{end}}\n"

	Parse_alphabet("./alphabet.json")
	Parse_scheme("./table.json")

	fmt.Println(len(alphabet))

	sql_script_file, err := os.Create("./inserts.sql")
	if err != nil {
		logger.Println(err)
	}

	template, err := template.New("sql_test_inserts").Parse(template_str)
	if err != nil {
		logger.Println(err)
	}

	for i := 0; i < len(tables); i++{
		Generate_table(tables[i], sql_script_file, template)
	}

	//if len(tables[0].Dependency) == 0 {fmt.Println("ok")}
	//fmt.Println(alphabet[4])
}

func Generate_table(request Request, file *os.File, tmp *template.Template){
	var b strings.Builder
	for i := 0; i < n; i++ {
		b.WriteString("(")
		for j := 0; j < len(request.Fields); j++ {
			fmt.Println(len(request.Fields))
			b.WriteString(Gen_data(request.Fields[j]))
			b.WriteString(",")
		}
		b.WriteString("),")
		request.Data = append(request.Data, b.String())
	}
	fmt.Println(b.String())
	Write_data(file, tmp, &request)
}

func Write_data(file *os.File, tmp *template.Template, data *Request){
	err := tmp.Execute(file, data)
	if err != nil {
		logger.Println(err)
	}
}

func Gen_data(field Field_container) string{
	switch field.Type {
	case "string":
		var str string = "'"
		str += Gen_rand_string(5)
		str += "'"
		return str
	case "int":
		return strconv.Itoa(1+rand.Intn(10))
	}
	return ""
}

func Gen_rand_string(size int) string {
	var b strings.Builder
	for i := 0; i < size; i++ {
		b.WriteString(alphabet[rand.Intn(len(alphabet))])
	}
	return b.String()
}

func Parse_alphabet(alphabet_path string){
	alphabet_file, err := os.Open(alphabet_path)
	if err != nil {
		logger.Println(err)
	}
	alphabet_byte, err := ioutil.ReadAll(alphabet_file)
	if err != nil {
		logger.Println(err)
	}
	alphabet_file.Close()
	json.Unmarshal(alphabet_byte, &alphabet)
}

func Parse_scheme(scheme_path string){
	tables_file, err := os.Open("table.json")
	if err != nil {
		logger.Println(err)
	}
	tables_byte, err := ioutil.ReadAll(tables_file)
	if err != nil {
		logger.Println(err)
	}
	tables_file.Close()
	json.Unmarshal(tables_byte, &tables)
}
