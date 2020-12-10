var array = [2, 4, 6 , 8, 10, 12],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
document.write('Sum : '+s + ' Product :  ' +p); 