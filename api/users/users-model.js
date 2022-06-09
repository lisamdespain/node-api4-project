

function getId(){
    return new Date().getTime() * Math.random() * 100000
}

const initialUsers = () =>([
    {id: getId(), name: 'Lisa', password: "test"},
    {id: getId(), name: 'Ian', password: "hotMan"},
    {id: getId(), name: 'Nicole', password: "smartDaughter"},
    {id: getId(), name: 'Nathan', password: "smartSon"}
])

let users = initialUsers;

const find = () =>{
    return Promise.resolve(users)
}

const insert = ({name, password}) =>{
const newUser = {id: getId(), name, password}
users.push(newUser)
return Promise.resolve(newUser)
}

const login = ({ name, password }) => {
    // SELECT * FROM users WHERE id = 1;
    const user = users.find(d => d.name === name && d.password === password)
    if (user){
        return Promise.resolve(user)
    } else{
        return Promise.resolve(null);
    }
  }

module.exports = {
    find, 
    login,
    insert
}