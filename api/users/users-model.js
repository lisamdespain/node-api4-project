

function getId(){
    return new Date().getTime() * Math.random() * 100000
}

const initialUsers = () =>([
    {id: getId(), name: 'Lisa', password: "XYZ123"},
    {id: getId(), name: 'Ian', password: "ABC987"},
    {id: getId(), name: 'Nicole', password: "XYZ123"},
    {id: getId(), name: 'Nathan', password: "ABC987"}
])

let users = initialUsers;

const find = () => {
    return Promise.resolve(users)
  }
  

const insert = ({name, password}) =>{
    const newUser = {id: getId(), name, password}
    users.push(newUser)
    return Promise.resolve(newUser)
}

const login = ({ name, password }) => {
    const userName = users.find(d => d.name === name)
    const userPassword = users.find(p=> p.password == password)
    if (userName && userPassword){
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