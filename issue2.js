function avg(data){
  let sum = 0
  data.employees.forEach((item) => {
    sum += item.salary
  })
  return sum / data.count
}


console.log(avg({
  "count":3,
  "employees":[ 
    { 
      "name":"John",
      "salary":30000 
    },
    { 
      "name":"Bob",
      "salary":60000 
    },
    {
      "name":"Jenny",
      "salary":50000 
    }
  ]
}))