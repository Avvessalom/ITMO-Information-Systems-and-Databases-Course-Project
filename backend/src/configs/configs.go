package configs

import (
	"gopkg.in/yaml.v3"
	"io/ioutil"
	"log"
)

type Configs struct {
	Port string `yaml:"port"`
	Host string `yaml:"host"`
}

func GetConf(path string) Configs {
	var conf Configs
	confFile, err := ioutil.ReadFile(path)
	if err != nil {
		log.Printf("yaml get file err %v", err)
	}
	err = yaml.Unmarshal(confFile, &conf)
	if err != nil {
		log.Printf("Unmarshall error %v", err)
	}

	return conf
}
