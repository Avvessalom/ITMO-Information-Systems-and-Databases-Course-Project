package main

import(
	"text/template"
	"os"
	"math/rand"
	"time"
	"strings"
	"strconv"
)

type Request struct{
	Table_name string;
	Fields, Data []string
}
var (
	template_str string = "insert into {{.Table_name}}({{range .Fields}}{{.}}{{end}}) values{{range .Data}}\n\t{{.}}{{end}}\n\n"
	iroha []string = []string{
		"i", "ro", "ha", "ni", "ho", "he", "to",
		"chi", "ri", "nu", "ru", "wo",
		"wa", "ka", "yo", "ta", "re", "so",
		"tsu", "ne", "na", "ra", "mu",
		"u", "wi", "no", "o", "ku", "ya", "ma",
		"ke", "fu", "ko", "e", "te",
		"a", "sa", "ki", "yu", "me", "mi", "shi",
		"we", "hi", "mo", "se", "su",
	}
)

func main() {
	_ = os.Remove("./inserts.sql")
	inserts, err := os.OpenFile("./inserts.sql",os.O_RDWR|os.O_CREATE, 0777)
	if err != nil {panic(err)}
	template, err := template.New("Request").Parse(template_str)
	if err != nil {panic(err)}

	vil_count := hid_vil_gen(inserts, template)
	clan_count := clan_gen(inserts, template, vil_count)
	ninja_count := ninja_gen(inserts, template, vil_count, clan_count)
	Clan_leader_gen(inserts, template, clan_count, ninja_count)
}

func hid_vil_gen(inserts *os.File, hidden_vil_tmp *template.Template) int {
	test_data := Request{
		Table_name: "Hidden_Village",
		Fields: []string{
			"name",
		},
	}
	for i := 0; i < 10; i++ {
		test_data.Data = append(test_data.Data, "('" + generate_rand_str(2+rand.Intn(3)) + "'),")
	}
	test_data.Data = append(test_data.Data, "('" + generate_rand_str(2+rand.Intn(3)) + "');")

	Write_data(inserts, hidden_vil_tmp, &test_data)
	return len(test_data.Data)
}

func clan_gen(inserts *os.File, tmp *template.Template, vil_id int) int {
	clans := Request{
		Table_name: "Clan",
		Fields: []string{
			"name,",
			"village,",
			"prestige",
		},
	}
	for i := 0; i < 10; i++ {
		clans.Data = append(clans.Data, "('"+ generate_rand_str(3+rand.Intn(3)) + "'," +
			strconv.Itoa(1+rand.Intn(vil_id-1)) + "," +
			strconv.Itoa(rand.Intn(100)) + "),")
	}
	clans.Data = append(clans.Data, "('"+ generate_rand_str(3+rand.Intn(3)) + "'," +
		strconv.Itoa(rand.Intn(vil_id)) + "," +
		strconv.Itoa(rand.Intn(100)) + ");")

	Write_data(inserts, tmp, &clans)
	return len(clans.Data)
}

func ninja_gen(inserts *os.File, tmp *template.Template, vil_id, clan_id int) int {
	ninjas := Request{
		Table_name: "Ninja",
		Fields: []string{
			"name,",
			"age,",
			"sex,",
			"village,",
			"clan,",
			"status",
		},
	}
	for i := 0; i < 10; i++ {
		var sex string = "M"
		var status string = "alive"
		if rand.Intn(2) == 1 {
			sex = "M"
		} else {
			sex = "F"
		}
		if rand.Intn(2) == 1 {
			status = "alive"
		} else {
			status = "dead"
		}

		ninjas.Data = append(ninjas.Data, "('"+
			generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2))+"'," +
			strconv.Itoa(rand.Intn(100)) + ",'" +
			sex + "'," +
			strconv.Itoa(1+rand.Intn(vil_id-1)) + "," +
			strconv.Itoa(1+rand.Intn(clan_id-1)) + ",'" +
			status + "'),")
	}
	ninjas.Data = append(ninjas.Data, "('"+
		generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2))+"'," +
		strconv.Itoa(rand.Intn(100)) + ",'" +
		"F"+"'," +
		strconv.Itoa(1+rand.Intn(vil_id-1)) + "," +
		strconv.Itoa(1+rand.Intn(clan_id-1)) + ",'" +
		"dead" + "');")

	Write_data(inserts, tmp, &ninjas)
	return len(ninjas.Data)
}

func Clan_leader_gen(inserts *os.File, tmp *template.Template, clan_count, ninja_count int) {
	request := Request{
		Table_name: "Clan_leader",
		Fields: []string{
			"clan_ID,",
			"ninja_ID",
		},
	}
	for i := 1; i < clan_count; i++ {
		request.Data = append(request.Data, "(" +
			strconv.Itoa(i) + "," +
			strconv.Itoa(1+rand.Intn(ninja_count-1)) + "),")
	}
	request.Data = append(request.Data, "(" +
		strconv.Itoa(clan_count) + "," +
		strconv.Itoa(1+rand.Intn(ninja_count-1)) + ");")

	Write_data(inserts, tmp, &request)
}

func Write_data(inserts *os.File, tmp *template.Template, data *Request){
	err := tmp.Execute(inserts, data)
	if err != nil {
		panic(err)
	}
}

func generate_rand_str(size int) string {
	rand.Seed(time.Now().UnixNano())
	var b strings.Builder
	for i := 0; i < size; i++ {
		b.WriteString(iroha[rand.Intn(len(iroha))])
	}
	return b.String()
}
