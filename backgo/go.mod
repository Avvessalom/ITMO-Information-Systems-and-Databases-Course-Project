module backend

go 1.15

replace configs => ./src/configs
replace searchmod => ./src/searchmod

require (
	searchmod v0.0.0
	configs v0.0.0
	github.com/jackc/pgx/v4 v4.10.0 // indirect
	github.com/lib/pq v1.9.0 // indirect
	golang.org/x/crypto v0.0.0-20201208171446-5f87f3452ae9 // indirect
	golang.org/x/text v0.3.4 // indirect
	golang.org/x/xerrors v0.0.0-20200804184101-5ec99f83aff1 // indirect
	gopkg.in/yaml.v3 v3.0.0-20200615113413-eeeca48fe776 // indirect
	gorm.io/driver/postgres v1.0.5 // indirect
	gorm.io/gorm v1.20.8 // indirect
)
