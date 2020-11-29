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
	count, err = strconv.Atoi(os.Args[1])
)

func main() {
	if err != nil || count <=0 {panic(err)}
	_ = os.Remove("./inserts.sql")
	inserts, err := os.OpenFile("./inserts.sql",os.O_RDWR|os.O_CREATE, 0777)
	if err != nil {panic(err)}
	template, err := template.New("Request").Parse(template_str)
	if err != nil {panic(err)}

	vil_count := hid_vil_gen(inserts, template)
	clan_count := clan_gen(inserts, template, vil_count)
	ninja_count := ninja_gen(inserts, template, vil_count, clan_count)
	Clan_leader_gen(inserts, template, clan_count, ninja_count)
	Destroyed_village_gen(inserts, template, vil_count, ninja_count)
	lord_count := Country_lord_gen(inserts, template)
	country_count := Country_gen(inserts, template, lord_count, vil_count)
	citizen_count := Citizen_gen(inserts, template, vil_count)
	Parents_gen(inserts, template, citizen_count)
	Ninja_parents_gen(inserts, template, ninja_count)
	biju_count := Biju_gen(inserts, template)
	Jinchuriki_gen(inserts, template, ninja_count, biju_count)
	rank_count := Ninjas_rank_gen(inserts)
	Ranked_ninja_gen(inserts, template, rank_count, ninja_count)
	type_count := Type_gen(inserts,template)
	additional_count := Additional_type_gen(inserts,template)
	tec_rank_count := Technic_rank_gen(inserts)
	technic_count := Technic(inserts,template,type_count,additional_count,tec_rank_count)
	Ninja_technic_gen(inserts, template, ninja_count, technic_count)
	war_count := War_gen(inserts, template, country_count)
	Battle_gen(inserts, template, war_count, country_count)
}

func hid_vil_gen(inserts *os.File, hidden_vil_tmp *template.Template) int {
	test_data := Request{
		Table_name: "Hidden_Village",
		Fields: []string{
			"name",
		},
	}
	for i := 0; i < count; i++ {
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
	for i := 0; i < count; i++ {
		clans.Data = append(clans.Data, "('"+ generate_rand_str(3+rand.Intn(3)) + "'," +
			strconv.Itoa(1+rand.Intn(vil_id)) + "," +
			strconv.Itoa(rand.Intn(100)) + "),")
	}
	clans.Data = append(clans.Data, "('"+ generate_rand_str(3+rand.Intn(3)) + "'," +
		strconv.Itoa(1+rand.Intn(vil_id)) + "," +
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
	for i := 0; i < count; i++ {
		var sex string = "M"
		var status string = "alive"
		if rand.Intn(2) == 1 {
			sex = "F"
		}
		if rand.Intn(2) == 1 {
			status = "dead"
		}

		ninjas.Data = append(ninjas.Data, "('"+
			generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2))+"'," +
			strconv.Itoa(rand.Intn(100)) + ",'" +
			sex + "'," +
			strconv.Itoa(1+rand.Intn(vil_id)) + "," +
			strconv.Itoa(1+rand.Intn(clan_id)) + ",'" +
			status + "'),")
	}
	ninjas.Data = append(ninjas.Data, "('"+
		generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2))+"'," +
		strconv.Itoa(rand.Intn(100)) + ",'" +
		"F"+"'," +
		strconv.Itoa(1+rand.Intn(vil_id)) + "," +
		strconv.Itoa(1+rand.Intn(clan_id)) + ",'" +
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
			strconv.Itoa(1+rand.Intn(ninja_count)) + "),")
	}
	request.Data = append(request.Data, "(" +
		strconv.Itoa(clan_count) + "," +
		strconv.Itoa(1+rand.Intn(ninja_count)) + ");")

	Write_data(inserts, tmp, &request)
}

func Destroyed_village_gen(inserts *os.File, tmp *template.Template, vil_count, ninja_count int) {
	request := Request{
		Table_name: "Destroyed_village",
		Fields: []string{
			"village_ID,",
			"destroyer,",
			"quantity",
		},
	}
	for i := 1; i < vil_count/5; i++ {
		request.Data = append(request.Data, "(" +
			strconv.Itoa(1+rand.Intn(vil_count)) + "," +
			strconv.Itoa(1+rand.Intn(ninja_count)) + ","+
			strconv.Itoa(rand.Intn(1488)) + "),")
	}
	request.Data = append(request.Data, "(" +
		strconv.Itoa(1+rand.Intn(vil_count-1)) + "," +
		strconv.Itoa(1+rand.Intn(ninja_count-1)) + ","+
		strconv.Itoa(rand.Intn(1488)) + ");")

	Write_data(inserts, tmp, &request)
}

func Country_lord_gen(inserts *os.File, tmp *template.Template) int {
	request := Request{
		Table_name: "Country_lord",
		Fields: []string{
			"name,",
			"age,",
			"sex,",
			"status",
		},
	}
	for i := 0; i < count; i++ {
		var sex string = "M"
		var status string = "alive"
		if rand.Intn(2) == 1 {
			sex = "F"
		}
		if rand.Intn(2) == 1 {
			status = "dead"
		}

		request.Data = append(request.Data, "('"+
			generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2))+"'," +
			strconv.Itoa(rand.Intn(100)) + ",'" +
			sex + "'," +
			status + "'),")
	}
	request.Data = append(request.Data, "('"+
		generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2))+"'," +
		strconv.Itoa(rand.Intn(100)) + ",'" +
		"F"+"'," +
		"dead" + "');")

	Write_data(inserts, tmp, &request)
	return len(request.Data)
}

func Country_gen(inserts *os.File, tmp *template.Template, lord_count, vil_count int) int {
	request := Request{
		Table_name: "Country_lord",
		Fields: []string{
			"name,",
			"country_lord,",
			"hidden_village",
		},
	}
	for i := 0; i < count/3; i++ {
		request.Data = append(request.Data, "('"+
			generate_rand_str(2+rand.Intn(4)) + "'," +
			strconv.Itoa(1+rand.Intn(lord_count)) + "," +
			strconv.Itoa(1+rand.Intn(vil_count)) + "),")
	}
	request.Data = append(request.Data, "('"+
		generate_rand_str(2+rand.Intn(4)) + "'," +
		strconv.Itoa(1+rand.Intn(lord_count)) + "," +
		strconv.Itoa(1+rand.Intn(vil_count))+");")

	Write_data(inserts, tmp, &request)
	return len(request.Data)
}

func Citizen_gen(inserts *os.File, tmp *template.Template, vil_count int) int {
	request := Request{
		Table_name: "Citizen",
		Fields: []string{
			"village,",
			"name,",
			"age,",
			"sex,",
			"status",
		},
	}
	for i := 0; i < 3*count; i++ {
		var sex string = "M"
		var status string = "alive"
		if rand.Intn(2) == 1 {
			sex = "F"
		}
		if rand.Intn(2) == 1 {
			status = "dead"
		}

		request.Data = append(request.Data, "("+
			strconv.Itoa(1+rand.Intn(vil_count)) + ",'" +
			generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2)) + "'," +
			strconv.Itoa(rand.Intn(100)) + ",'" +
			sex + "','" +
			status + "'),")
	}
	request.Data = append(request.Data, "("+
		strconv.Itoa(1+rand.Intn(vil_count)) + ",'" +
		generate_rand_str(2+rand.Intn(2)) + " " + generate_rand_str(2+rand.Intn(2)) + "'," +
		strconv.Itoa(rand.Intn(100)) + ",'" +
		"M" + "','" +
		"dead" + "'),")

	Write_data(inserts, tmp, &request)
	return len(request.Data)
}

func Parents_gen(inserts *os.File, tmp *template.Template, citizen_count int) {
	request := Request{
		Table_name: "Parents",
		Fields: []string{
			"children_ID,",
			"parent_Id",
		},
	}
	for i := 1; i < citizen_count/4; i++ {
		children := strconv.Itoa(1+rand.Intn(citizen_count))
		parent := strconv.Itoa(1+rand.Intn(citizen_count))
		if children == parent {continue}
		request.Data = append(request.Data, "(" +
			children + "," +
			parent + "),")
	}
	children := strconv.Itoa(1+rand.Intn(citizen_count))
	parent := strconv.Itoa(1+rand.Intn(citizen_count))
	request.Data = append(request.Data, "(" +
		children + "," +
		parent + ");")

	Write_data(inserts, tmp, &request)
}

func Ninja_parents_gen(inserts *os.File, tmp *template.Template, ninja_count int) {
	request := Request{
		Table_name: "Ninja_parents",
		Fields: []string{
			"children_ID,",
			"parent_ID",
		},
	}
	for i := 1; i < ninja_count/4; i++ {
		children := strconv.Itoa(1+rand.Intn(ninja_count))
		parent := strconv.Itoa(1+rand.Intn(ninja_count))
		if children == parent {continue}
		request.Data = append(request.Data, "(" +
			children + "," +
			parent + "),")
	}
	children := strconv.Itoa(1+rand.Intn(ninja_count))
	parent := strconv.Itoa(1+rand.Intn(ninja_count))
	request.Data = append(request.Data, "(" +
		children + "," +
		parent + ");")

	Write_data(inserts, tmp, &request)
}

func Biju_gen(inserts *os.File, tmp *template.Template) int {
	request := Request{
		Table_name: "Biju",
		Fields: []string{
			"name,",
			"count_of_tails",
		},
	}
	for i := 1; i < 9; i++ {
		request.Data = append(request.Data, "('" +
			generate_rand_str(2+rand.Intn(2)) + "'," +
			strconv.Itoa(i) + "),")
	}
	request.Data = append(request.Data, "('" +
		generate_rand_str(2+rand.Intn(2)) + "'," +
		strconv.Itoa(9) + ");")


	Write_data(inserts, tmp, &request)
	return len(request.Data)
}

func Jinchuriki_gen(inserts *os.File, tmp *template.Template, ninja_count, biju_count int) {
	request := Request{
		Table_name: "Jinchuriki",
		Fields: []string{
			"ninja_ID,",
			"biju",
		},
	}
	for i := 0; i < count/10; i++ {
		request.Data = append(request.Data, "(" +
			strconv.Itoa(1+rand.Intn(ninja_count)) + "," +
			strconv.Itoa(1+rand.Intn(biju_count)) + "),")
	}
	request.Data = append(request.Data, "(" +
		strconv.Itoa(1+rand.Intn(ninja_count)) + "," +
		strconv.Itoa(1+rand.Intn(biju_count)) + ");")

	Write_data(inserts, tmp, &request)
}

func Ninjas_rank_gen(inserts *os.File) int {
	data := `insert into Ninjas_rank(name, condition_of_receipt) values
	('Genin', 'Pass school exam'),
	('Chuunin', 'Complete list of missions'),
	('Jounin', 'Complete list of high ranked missions'),
	('Hokage', 'Hero of war');

`
	inserts.WriteString(data)
	return 4
}

func Ranked_ninja_gen(inserts *os.File, tmp *template.Template, rank_count, ninja_count int) {
	request := Request{
		Table_name: "Ranked_ninja",
		Fields: []string{
			"rank_ID,",
			"ninja_ID",
		},
	}
	for i := 1; i < ninja_count; i++ {
		request.Data = append(request.Data, "(" +
			strconv.Itoa(1+rand.Intn(rank_count)) + "," +
			strconv.Itoa(i) + "),")
	}
	request.Data = append(request.Data, "(" +
		strconv.Itoa(1+rand.Intn(rank_count)) + "," +
		strconv.Itoa(ninja_count) + ");")

	Write_data(inserts, tmp, &request)
}

func Type_gen(inserts *os.File, hidden_vil_tmp *template.Template) int {
	test_data := Request{
		Table_name: "Type",
		Fields: []string{
			"name",
		},
	}
	for i := 0; i < count/2; i++ {
		test_data.Data = append(test_data.Data, "('" + generate_rand_str(2+rand.Intn(3)) + "'),")
	}
	test_data.Data = append(test_data.Data, "('" + generate_rand_str(2+rand.Intn(3)) + "');")

	Write_data(inserts, hidden_vil_tmp, &test_data)
	return len(test_data.Data)
}

func Additional_type_gen(inserts *os.File, hidden_vil_tmp *template.Template) int {
	test_data := Request{
		Table_name: "Additional_type",
		Fields: []string{
			"name",
		},
	}
	for i := 0; i < count/3; i++ {
		test_data.Data = append(test_data.Data, "('" + generate_rand_str(2+rand.Intn(3)) + "'),")
	}
	test_data.Data = append(test_data.Data, "('" + generate_rand_str(2+rand.Intn(3)) + "');")

	Write_data(inserts, hidden_vil_tmp, &test_data)
	return len(test_data.Data)
}

func Technic_rank_gen(inserts *os.File) int {
	data := `insert into Technic_rank(name) values
	('A'),		--1
	('B'),		--2
	('C'),		--3
	('D'),		--4
	('E'),		--5
	('F');		--6


`
	inserts.WriteString(data)
	return 6
}

func Technic(inserts *os.File, tmp *template.Template, type_count, additional_count, rank_count int) int {
	request := Request{
		Table_name: "Technic",
		Fields: []string{
			"type,",
			"additional_type,",
			"blood_restriction,",
			"rank,",
			"rune_seals",
		},
	}
	for i := 0; i < count/2; i++ {
		var blood string = "false"
		if rand.Intn(2) == 1 {
			blood = "true"
		}
		request.Data = append(request.Data, "("+ strconv.Itoa(1+rand.Intn(type_count)) + "," +
			strconv.Itoa(1+rand.Intn(additional_count)) + "," +
			blood + "," +
			strconv.Itoa(1+rand.Intn(rank_count)) + ",'" +
			generate_rand_str(3+rand.Intn(3)) + "'),")
	}
	var blood string = "false"
	if rand.Intn(2) == 1 {
		blood = "true"
	}
	request.Data = append(request.Data, "("+ strconv.Itoa(1+rand.Intn(type_count)) + "," +
		strconv.Itoa(1+rand.Intn(additional_count)) + "," +
		blood + "," +
		strconv.Itoa(1+rand.Intn(rank_count)) + ",'" +
		generate_rand_str(3+rand.Intn(3)) + "');")

	Write_data(inserts, tmp, &request)
	return len(request.Data)
}

func Ninja_technic_gen(inserts *os.File, tmp *template.Template, ninja_count, technic_count int) {
	request := Request{
		Table_name: "Ninja_technic",
		Fields: []string{
			"ninja_ID,",
			"technic_ID",
		},
	}
	for i := 1; i < 2*count; i++ {
		request.Data = append(request.Data, "(" +
			strconv.Itoa(1+rand.Intn(ninja_count)) + "," +
			strconv.Itoa(1+rand.Intn(technic_count)) + "),")
	}
	request.Data = append(request.Data, "(" +
		strconv.Itoa(1+rand.Intn(ninja_count)) + "," +
		strconv.Itoa(1+rand.Intn(technic_count)) + ");")

	Write_data(inserts, tmp, &request)
}

func War_gen(inserts *os.File, tmp *template.Template, country_count int) int {
	request := Request{
		Table_name: "War",
		Fields: []string{
			"name,",
			"attacking_country,",
			"defending_country,",
			"loss_of_attackers,",
			"loss_of_defenders",
		},
	}
	for i := 1; i < country_count/4; i++ {
		attaker := strconv.Itoa(1+rand.Intn(country_count))
		defender := strconv.Itoa(1+rand.Intn(country_count))
		if attaker == defender {continue}
		request.Data = append(request.Data, "('" +
			generate_rand_str(2+rand.Intn(4)) + "'," +
			attaker + "," +
			defender + "," +
			strconv.Itoa(rand.Intn(999999)) + "," +
			strconv.Itoa(rand.Intn(999999)) + "),")
	}
	attaker := strconv.Itoa(1+rand.Intn(country_count))
	defender := strconv.Itoa(1+rand.Intn(country_count))
	request.Data = append(request.Data, "('" +
		generate_rand_str(2+rand.Intn(4)) + "'," +
		attaker + "," +
		defender + "," +
		strconv.Itoa(rand.Intn(999999)) + "," +
		strconv.Itoa(rand.Intn(999999)) + ");")

	Write_data(inserts, tmp, &request)

	return len(request.Data)
}

func Battle_gen(inserts *os.File, tmp *template.Template, war_count, country_count int) {
	request := Request{
		Table_name: "War",
		Fields: []string{
			"name,",
			"attacking_country,",
			"defending_country,",
			"loss_of_attackers,",
			"loss_of_defenders",
		},
	}
	for i := 1; i < country_count/4; i++ {
		request.Data = append(request.Data, "(" +
			strconv.Itoa(1+rand.Intn(war_count)) + "," +
			strconv.Itoa(1+rand.Intn(country_count)) + "," +
			strconv.Itoa(rand.Intn(999999)) + "," +
			strconv.Itoa(rand.Intn(999999)) + ",'" +
			generate_rand_str(2+rand.Intn(4)) + "'),")
	}
	request.Data = append(request.Data, "(" +
			strconv.Itoa(1+rand.Intn(war_count)) + "," +
			strconv.Itoa(1+rand.Intn(country_count)) + "," +
			strconv.Itoa(rand.Intn(999999)) + "," +
			strconv.Itoa(rand.Intn(999999)) + ",'" +
			generate_rand_str(2+rand.Intn(4)) + "');")

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
