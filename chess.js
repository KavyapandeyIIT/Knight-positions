
    
    

    const chessHandler = (a,b)=>{
        
        const row = [ 2, 1, -1, -2, -2, -1, 1, 2, 2 ]
        const col= [ 1, 2, 2, 1, -1, -2, -2, -1, 1 ]
        for(let i = 1;i<=8;i++){
            for(let j = 1;j<=8;j++){
                let id = i.toString()+j.toString();
                document.getElementById(id).style.borderWidth="1px";
                document.getElementById(id).style.borderColor="black";
            }
        }
        
        for(let i=0;i<row.length;i++){
            let x=a+(row[i]-'0');
            let y=b+(col[i]-'0');
            if(x>=1 && y>=1 && y<=8 && x<=8){
                let id = x.toString()+y.toString();
                document.getElementById(id).style.borderWidth="5px";
                document.getElementById(id).style.borderColor="#ffff00";
                //console.log("x: "+x,"y: "+y);
            }
            
        }
    }


