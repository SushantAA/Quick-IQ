
alert("board making connected");

const make_board = () =>{
    for(let i=0;i<hight/44;i++)
    {
        let row = 'row'+i;
        let Board_col = '<div>';
        for(let j =0;j<width/42;j++)
        {
            let id ='a'+ i.toString() + 'b'+j.toString();
            let html = '<div id =\"' + id + '\"class = ' + '"boxes"' + ' ></div>';
            Board_col = Board_col + html;
        }
        Board_row = Board_row + Board_col + '</div>';
    }
    Board.innerHTML = Board_row;
}

module.exports =make_board;