package main

import(
	"text/template"
	"os"
	"math/rand"
	"time"
	"strings"
)

type Hidden_Village struct {
	Name []string
}

var hidden_village string = `insert into Hidden_Village(name) values{{range .Name}}
	{{.}}{{end}}
`

func main() {
	inserts, err := os.OpenFile("./inserts.sql",os.O_RDWR|os.O_CREATE, 0777)
	if err != nil {panic (err)}
	hid_vil_gen(inserts);
}

func hid_vil_gen(inserts *os.File) {
	/*test := Hidden_Village{
		Name: []string{
			"Konoha",
			"Rain",
		},
	}*/
	//test_data := make([]string,0);
	test_data := Hidden_Village{}
	for i := 0; i < 10; i++ {
		test_data.Name = append(test_data.Name, "('" + generate_rand_str(8) + "'),")
	}
	test_data.Name = append(test_data.Name, "('" + generate_rand_str(8) + "');")
	hidden_vil_tmp, err := template.New("Hidden_Village").Parse(hidden_village)
	if err != nil {panic(err)}
	err = hidden_vil_tmp.Execute(inserts, test_data)
	if err != nil {panic(err)}
}

func generate_rand_str(size int) string {
	rand.Seed(time.Now().UnixNano())
	chars := []rune("ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz")
	var b strings.Builder
	for i := 0; i < size; i++ {
		b.WriteRune(chars[rand.Intn(len(chars))])
	}
	return b.String()
}
