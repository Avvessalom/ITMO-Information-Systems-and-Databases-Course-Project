package searchmod

import (
	"net/http"
)

func searchDB(res http.ResponseWriter, req *http.Request){
	if req.Method == "GET" {
		res.Write([]byte("IM IN"))
	}
}

func SearchCore(){
	http.HandleFunc("/search", searchDB)
}
