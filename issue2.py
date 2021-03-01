def avg(data):
	sum = 0
	for i in range(data['count']):
		sum += data['employees'][i]['salary']
	return sum / data['count']


print(avg({
	"count": 3, "employees": [
		{
			"name": "John",
			"salary": 30000},
		{
			"name": "Bob",
			"salary": 60000},
		{
			"name": "Jenny",
			"salary": 50000}
	]
}))