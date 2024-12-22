let peoples=[

    {
        name:"Enes",
        surname:"Çadırlı",
        age:22,
    },
    
    {
        name:"Eren",
        surname:"Çadırlı",
        age:16,
    },
    
    {
        name:"Ege",
        surname:"Kutlubaş",
        age:23,
    },
    
    {
        name:"Baran",
        surname:"Bilge",
        age:22
    },
    
    {
        name:"Ömer",
        surname:"Kurşunlu",
        age:23,
    },
    
    {
       name:"Emir Mirza",
       surname:"Tuna",
       age:12,
    }
                ];



function findPeople(peoples, searcName){
    return peoples.find(person => person.name === searcName)
}
const person = findPeople(peoples,"Eren")

console.log(person);
