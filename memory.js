
    var memory_array=['A','A','B','B','C','C','D','D','E','E','F','F','J','J','H','H','I','I','J','J','K','K','L','L'];
    var memory_array2 = ['13%','0.13','25%','1/4','1/3','0.33','0.7','70%','.5','1/2','1/8','12.5%','2/5','40%','3/4','75%','3/5','0.60','20%','0.20','1/10','10%','30%','0.30'];
    var memory_value=[];   //storing mempry value
    var memory_tile_ids=[]; //stores memroy tile ids
    var tiles_flipped=0;  //how manhy times flipped
    Array.prototype.memory_tile_shuffle = function()
    {
        var i=this.length,j,temp;
        while(--i>0)
        {
            j=Math.floor(Math.random() * (i+1));
            temp = this[j];
            this[j]=this[i];
            this[i]=temp;
        }    
    }
    function newBoard()
    {
        tiles_flipped = 0;
        var output = '';
        memory_array.memory_tile_shuffle();
        for(var i=0; i < memory_array.length;i++)
        {
              output +='<div id="tile_'+i+'" onclick="memoryFlipTile(this,\' '+memory_array[i]+'\')" ></div>';

        }
        document.getElementById('memory_board').innerHTML=output;

    }
    function memoryFlipTile(tile,val)
  {
      if(tile.innerHTML == " "&& memory_values.length < 2)
      {
          tile.style.background = '#FFF'; //here the background change to white when we clicked 
          tile.innerHTML = val;           //when we flipped it shows the value 
          if(memory_values.length == 0) //if there is no value it mean ==0
          {
              memory_values.push(val);    //then the value has been pushed 
              memory_tile_ids.push(tile.id); //after pushing the value is again push to tile only when we click   
          }
          else if(memory_values.length == 1) //if the memory value is not zero it mean this will be executed
          {
              memory_values.push(val);
              memory_tile_ids.push(tile.id);
          }
          if(memory_values[0] == memory_values[1]) //if the first value and second value are same
          {
              tiles_flipped += 2;               //here the tiles are flipped
              //clear both arrays
              memory_values = [];               //so after that the memory values is cleared for next matching
              memory_tile_ids = [];             //same for tiles 
              //check to see if the whole board is cleared
              if(tiles_flipped == memory_array.length)
              {
                  alert("BOARD IS CLEARED...GENERATING NEW BOARD");
                  //here the memory board will be deleted and by the newboard will be created with the dynamic function called newboard()
                  document.getElementById('memory_board').innerHTML = " "; 
                  newBoard();
              }
          }
            else
            {
                function flip2Back()                //this function is used if the match is not made
                {
                    //flip the 2 tiles back over

                    var tile1 = document.getElementById(memory_tile_ids[0]);
                    var tile2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url("snow_one.png") no-repeat';
                    tile_1.innerHTML =" ";
                    //clear both arrays
                    tile_2.style.background = 'url("snow_one.png") no-repeat';
                    tile_2.innerHTML =" ";
                    //clear both arrays
                    memory_values =[];
                    memory_tile_ids =[];
                }
            }
                setTimeout(flip2Back,700);      //this settime is used if there is a miss match then the 2 tiles will be flip back
      }
                   
  }
  
