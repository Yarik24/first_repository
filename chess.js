function chessBoard(){
             var table = document.createElement("table");
             var letters = ['','A','B','C','D','E','F','G','H',''];
             var black1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'];
             var white1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'];
             var black2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'];
             var white2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];
for ( var i = 0, h = 9; i < 10;i++, h--){
                var tr = table.insertRow(i);
                for(var j = 0; j < 10;j++){
                    var td = tr.insertCell(j);
                    switch(i){
                        case 0:
                            td.innerText = letters[j];
                            break;
                        case 1:
                            td.innerHTML = black1[j];
                            break;
                        case 2:
                            td.innerHTML = black2[j];
                            break;
                        case 7:
                            td.innerHTML = white2[j];
                            break;
                        case 8:
                            td.innerHTML = white1[j];
                            break;
                        case 9:
                            td.innerText = letters[j];
                            break;
                         default:
                            if (j == 0 || j == 9) {
                                td.innerHTML = h;
                            }
                            break;
                    }

                }
            } document.body.append(table);
         }
chessBoard();