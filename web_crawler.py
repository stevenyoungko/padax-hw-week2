import json
import requests as req

url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
r = req.get(url)
datas = json.loads(r.text)

with open("data.txt", 'w') as f:
    for i in datas["result"]["results"]:
        f.write(f'{i["stitle"]},{i["longitude"]},{i["latitude"]},http{i["file"].split("http")[1]}\n')
