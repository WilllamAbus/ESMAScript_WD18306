

document.addEventListener('DOMContentLoaded', function () {
    let Entity = function(name, delay){
        this.name = name;
        this.delay = delay;
    }
    
    Entity.prototype.greet = function()  {
        setTimeout(()=>{
            let outputDiv = document.getElementById('output');
           
        outputDiv.innerHTML += 'Xin chào, tên tôi là ' + this.name + '<br>';
    
        },this.delay);
    }
    
    let java = new Entity('Java', 500);
    let cpp = new Entity('C++', 30);
    
    java.greet();
    cpp.greet();


     


  

});
 