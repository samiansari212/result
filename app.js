var a = [
    {
        name:"Ali",
        result:"10",
        rollNo:i,
        institute:"SAIMS",
    },
    {
        name: "Kashif",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Ahmed",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Basit",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Talha",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Umer",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Mudassir",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Muneeb",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Ahmer",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    },
    {
        name:"Moiz",
        result:"10",
        rollNo:i,
        institute:"SAIMS"
    }
]

for(var i=0;i<a.length;i++){
    a[i].rollNo = i+1
}

var inp = document.getElementById("rollNumber");
var dName = document.getElementById("displayName");
var dResult = document.getElementById("displayResult");

function searchRes(){
    for (var j=0; j<a.length;j++){
        if(a[j].rollNo == inp.value){
            if(a[j].result){
                dName.innerHTML = a[j].name
                dResult.innerHTML = "Pass"
            }else{
                dName.innerHTML = a[j].name
                dResult.innerHTML = "Fail"
            }
        }
    }
}

console.log(a)

