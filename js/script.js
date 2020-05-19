  strany=["italy", "france", "switzerland","hungary","romania",
  "japan","afghanistan","india","brazilia","canada",
"argentina","kolumbia","england","mexico"]
  
  function makeTableFromCountry (num,i){
    let div= "<div "+"id="+'"'+strany[i]+'"'+"class="+'"bg"'+" >";
    let tab="<table width=100%>";
    let tr="<tr>";
    let td="<td>";
    let h1="<h1>";
    let tab1="<table width=100%>"
    h1+=num[0];
    h1+="-";
    h1+=num[1];
    h1+="</h1>";
	    tr="<tr align=left>";
        td="<td colspan=2 align=center>";
        td+=h1;
        tr+=td;
        tab+=tr;
    for (let i=2;i<6;i++)
    {
        tr="<tr>";
        td="<td align=left>";
        let txt1=about[i];
        let txt2=num[i];
        td+=txt1;
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
    let count1=num[6].length;
    for (let i=0;i<count1;i++)
    {
        tr="<tr>";
        td="<td align=left>";
        let txt1=about[6];
        let txt2=num[6][i];
		if(i==0){
        td+=txt1;
		}
        tr+=td;
        td="<td>";
        td+=(i+1)+'. ';
		td+=txt2;
        tr+=td;
        tab+=tr;

    }
    count1=num[7].length;
    for (let i=0;i<count1;i++)
    {
        tr="<tr>";
        td="<td align=left>";
        txt1=about[7];
        txt2=num[7][i];
        if (i===0)
        {
            td+=txt1;
        }
        tr+=td;
        td="<td>";
		td+=(i+1)+'. ';
        td+=txt2;
        tr+=td;
        tab+=tr;

    }
    let b="<b>";
	tr="<tr>";
    td="<td colspan=3 align=center>";
	txt1=about[8];
	b+=txt1;
	td+=b;
	tr+=td;
    tab+=tr;
	b+="</b>";
    for ( let key in num[8])
    {
        tr="<tr>";
		td="<td colspan=3>";
		txt2=num[8][key];
	    td+=key;
        td+="-";
        td+=txt2;
		tr+=td;
		tab+=tr;
    }
    tab+="</table>";
    div+=tab;
    div+="</div>";
    return div;
}
var my_per=countries.map((num,i)=>{return makeTableFromCountry(num,i)});

my_per.forEach(function(info, i, arr) {
    document.write(info);
})

