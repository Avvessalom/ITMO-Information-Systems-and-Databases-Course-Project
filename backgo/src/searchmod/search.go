package searchmod

import (
	"configs"
	"database/sql"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

type Result struct {
	Id uint `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
}

var (
	conf *configs.Configs
	database *sql.DB
)

func searchDB(res http.ResponseWriter, req *http.Request){
	if req.Method == "GET" {
		//res.Write([]byte("IM IN"))
		rows, err := database.Query("select * from (select *, word_similarity('nunoyu', name) as sim from technic) as result where result.sim > 0.5 order by result.sim desc;")
		if err != nil {
			log.Println(err)
		}
		defer rows.Close()
		results := []Result{}
		for rows.Next() {
			tmpRes := Result{Type: "technic"}
			err := rows.Scan(&tmpRes.Id, &tmpRes.Name)
			if err != nil {
				log.Println(err)
				continue
			}
			results = append(results, tmpRes)
		}
	}
}

func SearchCore(config *configs.Configs, db *sql.DB){
	conf = config
	database = db

	http.HandleFunc("/search", searchDB)
}
