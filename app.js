function newmessage(){
    let mess1="Hodwy, partner!";
    let mess2="this is a new day";
    let mess3="What a sitty day";
    let rannumber = Math.floor(Math.random() * 3);

    if(rannumber === 1){
        return console.log(mess1);
        } else if (rannumber === 2) {
            return console.log(mess2);
        } else {
            return console.log(mess3);
        }
}

console.log("Today Message");
newmessage();