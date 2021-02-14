
var vec=["omar","salchicha","pez","sara"];
console.log(vec);

var no=function()
{
	var i=0;
	var nos=document.getElementById("nos").value;
	var ul=vec.length-1; 
	while(i<vec.length)
	{
		if(nos==vec[i])
		{
			var ult=vec[ul];
			vec[ul]=vec[i];
			vec[i]=ult;
			vec.pop();
			console.log(vec);
			i=vec.length;
			document.getElementById("res").value="Eliminado conrrectame";
			document.getElementById("nos").value="";
		}
		else
		{
			i=i+1;
			if (nos!=vec[i])
			{
				document.getElementById("res").value=nos+" no se ecuentra";
			}
		}
	}
}

var nop=function()
{
	var nosotros=document.getElementById("nosotros").value;
	vec.push(nosotros);
	console.log(vec);
	document.getElementById("nosotros").value="";
}