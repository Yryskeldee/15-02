const array = [
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
    {
        username: 'Jack',
        full_name: 'Jack Koin'

    },
]
let i = 0 //i++
i = i+1
for(let i = 0; i < array.length; i++){
    if(i=== 2){
        break;
    }else{
        console.log(array[i])
    }
}
for (let user of array){
    console.log(user)
}
const obj = {
    key1: "b1",
    key2: "b2",
    key3: "b3",
    key4: "b4",
    key5: "b5",
}
for(let key in obj){
    console.log(obj[key])
}
const users = [
    {
        username: "jack",
        salary:500
    },
    {
        username: "Shaman",
        salary:1000
    },
    {
        username: "Goos",
        salary:5000
    }
]
const filteredUsers = users.filter(user => user.salary > 500)


for(let user of users){
    if (user.salary){
        filteredUsers.push(user)
    }
}
console.log(filteredUsers)



const robots = [
    {
        robot1:"7-team",
        power: "1000"
    },
    {
        robot2:"ky-k3n",
        power: "2000"
    },
    {
        robot3:"ba11-k0n-sky",
        power: "3000"
    },
    {
        robot4:"j0nny",
        power: "4000"
    },
    {
        robot5:"K-9",
        power: "5000"
    }
]
const filteredRobots = robots.filter(robot => robot.power > 3000)

console.log(filteredRobots)
