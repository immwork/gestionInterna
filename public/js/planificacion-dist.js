"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var t=0,e=Array(a.length);t<a.length;t++)e[t]=a[t];return e}return Array.from(a)}var xhr=new XMLHttpRequest,dataGet=function(a){xhr.onreadystatechange=function(){4===xhr.readyState&&200===xhr.status&&respuesta(xhr)},xhr.open("GET","php/planificacion.php?tsql="+a,!0),xhr.send()},respuesta=function(a){var t=JSON.parse(a.responseText),e=document.getElementById("data"),i=matchMedia("(min-width: 768px)");if(changeSize(i)){e.innerHTML+='\n            <div class="dataTable">\n                <div class="dataTable__header">\n                    <div class="dataTable__text">ID proyecto</div>\n                    <div class="dataTable__text">Proyecto</div>\n                    <div class="dataTable__text">Fecha Aprobación</div>\n                    <div class="dataTable__text">Fecha Fin</div>\n                    <div class="dataTable__graphic">Dias del mes</div>\n                </div>\n        ';var n=!0,r=!1,d=void 0;try{for(var o,c=t.data[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var l=o.value;e.innerHTML+='\n            \n            <div class="dataTable__data">\n            <div class="dataTable__text">'+l.CodigoProyecto+'</div>\n            <div class="dataTable__text">'+l.Proyecto+'</div>\n            <div class="dataTable__text">'+l.inicio+'</div>\n            <div class="dataTable__text">'+l.fin+'</div>\n            <div class="dataTable__graphic"">\n                <div class="graphic" id="'+l.CodigoProyecto+'"></div>\n            </div>\n          </div>\n            '}}catch(a){r=!0,d=a}finally{try{!n&&c.return&&c.return()}finally{if(r)throw d}}e.innerHTML+="</div>"}else{var s=!0,v=!1,_=void 0;try{for(var y,h=t.data[Symbol.iterator]();!(s=(y=h.next()).done);s=!0){var u=y.value;e.innerHTML+='\n\n            <div class="data__item">\n              <div class="data__header">\n              <h2 class="data__title">'+u.CodigoProyecto+" "+u.Proyecto+'</h2><i class="data__icon"></i>\n              </div>\n              <div class="data__info">\n              \n            <!--Datos proyecto-->\n            \n              <div class="data__text">Fecha Aprobación '+u.inicio+'</div>\n              <div class="data__text">Fecha Prevista Fin '+u.fin+'</div>\n              <div class="data__text">Duración '+u.duracion+" días</div>\n            </div>\n            "}}catch(a){v=!0,_=a}finally{try{!s&&h.return&&h.return()}finally{if(v)throw _}}items=[].concat(_toConsumableArray(document.querySelectorAll(".data__info"))),icons=[].concat(_toConsumableArray(document.querySelectorAll(".data__icon")))}for(var x=[],f=[],p=0;p<t.data.length;p++)x[p]={id:t.data[p].CodigoProyecto,duration:t.data[p].duracion},f.push(t.data[p].duracion);var b=Math.max.apply(Math,f);console.log(b);var m=function(a,t){var e=document.getElementById(a),i=100*t/b;e.style.width=i+"%",e.textContent=(i.toFixed(2).endsWith("00")?i.toFixed(0):i.toFixed(2))+"%"},T=!0,g=!1,A=void 0;try{for(var F,C=x[Symbol.iterator]();!(T=(F=C.next()).done);T=!0){var M=F.value;m(M.id,M.duration)}}catch(a){g=!0,A=a}finally{try{!T&&C.return&&C.return()}finally{if(g)throw A}}};dataGet("proyecto");