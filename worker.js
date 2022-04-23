



console.log('chujdupa') 
onmessage = function(e) {
    
    console.log('chujdupa')

    
    postMessage(e.data[0]);
  }









/*self.addEventListener('message', async function(e) {
    //  var message = e.data + 'to myself!';

    return postMessage(e.data)
    
    let table = []
    table = e.data[2]
    let linechange = e.data[1]
    let id = e.data[0]
    
    
    let adjacent = 0;  

        let addative = id;
        try{
        if(await checkcolor(addative - linechange )) adjacent += 1;
        if(await checkcolor(addative - linechange - 1 )) adjacent += 1;
        if(await checkcolor(addative - linechange + 1)) adjacent += 1;
        if(await checkcolor(addative - 1 )) adjacent += 1;
        if(await checkcolor(addative + 1)) adjacent += 1;
        if(await checkcolor(addative + linechange - 1)) adjacent += 1;
        if(await checkcolor(addative + linechange)) adjacent += 1;
        if(await checkcolor(addative + linechange + 1)) adjacent += 1;
        }
        catch(error1){
            console.log('closing1' + error1) 
        }
        if(await checkcolor(id)){
            if(adjacent == 1 || adjacent == 0) table.splice(id, 1, 'black');
            if(adjacent == 4 || adjacent > 4) table.splice(id, 1, 'black');  
            if(adjacent == 2 || adjacent == 3) return
        }
        else{
            if(adjacent == 3) return table.splice(id, 1, 'white');//3
        }
        
        self.postMessage(table)
        console.log('closing2') 

  async function checkcolor(id) {
    try{
        
        if (document.getElementById(id).style.backgroundColor != 'black') {
            return true;
        }
        else{   
            return false;
        }
    }
    catch(err){
        console.log(err)
    }
}
})
*/
