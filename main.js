//creamos un array vacio para colocar el valor total de la cuota y luego sumarlos 
let cotizaciones=[];
let datosCotizacion=[];

let mostrar;

let cuotaTotal;
let textoCoti;
// funcion para ejecutar el formulario 
let cotizar=document.getElementById('btnAdd')
cotizar.addEventListener('click', ()=>{
   

    class Cotizador{
        constructor(marca,gama,plan,sumaAsegurada,gnc,okm){
            this.plan=plan;
            this.gama=gama;
            this.gnc=gnc;
            this.sumaAsegurada=sumaAsegurada;
            this.okm=okm;
            this.marca=marca;
        }
    }
    
    let marca=document.getElementById('marca').value
    let gama=document.getElementById('gama').value
    let plan=document.querySelector('input[name="plan"]:checked').value
    let sumaAsegurada=document.getElementById('sumaAsegurada').value
    let gnc=document.querySelector('input[name="gnc"]:checked').value
    let okm=document.querySelector('input[name="Okm"]:checked').value
    let coti1;

    coti1= new Cotizador(marca,gama, plan,sumaAsegurada,gnc,okm);
    console.table(coti1)
    datosCotizacion.push(coti1)
    console.log(datosCotizacion)

    
    if ( sumaAsegurada!=="" && gama!=="Seleccione gama" && marca!=="Seleccione marca" && gnc!==""){

        let ocultarContenido=document.getElementById('form');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('listadoCotizaciones');
        mostrarContenido.style.display='flex'
    
    
    
    const cuota1= ()=>{
        let cuota=0;
        if (coti1.gama==="alta"){
            cuota=coti1.sumaAsegurada/50;
            return cuota
        }else if (coti1.gama==="media"){
            cuota=coti1.sumaAsegurada/60;
            return cuota
        } else {
            cuota= coti1.sumaAsegurada/70;
            return cuota;
            
        }
    }
    
    const gnc1=()=>{
        let cuotaGnc=100;
        if (coti1.gnc==="si"){
           return cuotaGnc
        }else{
            return cuotaGnc=0;
        }
    }
    const okm1=()=>{
        let cuotaOkm=100;
        if (coti1.okm==="si"){
           return cuotaOkm
        }else{
            return cuotaOkm=0;
        }
    }
    const plan1=()=>{

        let cuotaPlan=500;
        if (coti1.plan==="premium"){
           return cuotaPlan
        }else{
            return cuotaPlan=0;
        }
    }
//creamos funciones para extraer el ultimo valor que se agrego al array objetos dependido del valor objeto para luego pasarlo e imprimirlo en los detalles  
    const marcaAuto=()=>{

        const sel= datosCotizacion.map(selec => selec.marca);
    let guardada=(sel[sel.length-1])
    console.log("MARCAAAaa"+guardada)
    return guardada
    }
    const gamaAuto=()=>{

        const sel= datosCotizacion.map(selec => selec.gama);
    let guardada=(sel[sel.length-1])
    console.log("MARCAAAaa"+guardada)
    return guardada
    }
    const sumaAseguradaAuto=()=>{

        const sel= datosCotizacion.map(selec => selec.sumaAsegurada);
    let guardada=(sel[sel.length-1])
    console.log("MARCAAAaa"+guardada)
    return guardada
    }
    const gncAuto=()=>{

        const sel= datosCotizacion.map(selec => selec.gnc);
    let guardada=(sel[sel.length-1])
    console.log("MARCAAAaa"+guardada)
    return guardada
    }
    const okmAuto=()=>{

        const sel= datosCotizacion.map(selec => selec.okm);
    let guardada=(sel[sel.length-1])
    console.log("MARCAAAaa"+guardada)
    return guardada
    }
    const planAuto=()=>{

        const sel= datosCotizacion.map(selec => selec.plan);
    let guardada=(sel[sel.length-1])
    console.log("MARCAAAaa"+guardada)
    return guardada
    }


    // ejecutamos las funciones para calcular el total a pagar 
    totalPrima=cuota1()
    let totalGnc=gnc1();
    let totalOkm=okm1();
    let totalPlan=plan1();
    cuotaTotal= (totalGnc+totalPrima+totalOkm+totalPlan).toFixed(2);


    // ejecutamos las funciones para retornar los datos de las cotizaciones 
    let marcaGuardada=marcaAuto();
    let gamaGyardada=gamaAuto();
    let sumaAseguradaGuardada=sumaAseguradaAuto();

    let gncGuardada=gncAuto();
    let okmGuardada=gncAuto()
    let planGuardada=planAuto()
    

    
     mostrar = `<div class="cotizacionTexto"> La cuota a pagar de su vehiculo ${coti1.marca} es de :$${cuotaTotal}.- <a href="#" onclick="btnDescrip('${marcaGuardada}','${gamaGyardada}','${gncGuardada}','${okmGuardada}','${sumaAseguradaGuardada}','${planGuardada}','${cuotaTotal}')" id="btnDescrip">Ver detalles</a></div>`;
    textoCoti = document.createElement("p");

   textoCoti.innerHTML+=mostrar
   document.getElementById("textoCoti").appendChild(textoCoti);


    
    
    //total del presupuesto

    cotizaciones.push(Number(cuotaTotal))
    console.log(cotizaciones)
    
    let totalPresupuestado=0
    cotizaciones.forEach(function(a){totalPresupuestado += a;});
    console.log('Total a pagar'+totalPresupuestado)
    
    let totalCotizado=document.getElementById('totalCotizado')
    totalCotizado.innerHTML=`Total Cotizado $${totalPresupuestado.toFixed(2)}.-`;
} else{
    alert('Por Favor complete los campos Marca/Gama/Suma Asegurada')}

})



document.getElementById('btnVolver').addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('listadoCotizaciones');
    ocultarContenido.style.display='none';
    let mostrarContenido=document.getElementById('form');
    mostrarContenido.style.display='block'


})


// evento para boton ver detalles de la cotizacion

function btnDescrip (marcaGuardada,gamaGyardada,gncGuardada,okmGuardada,sumaAseguradaGuardada,planGuardada,cuotaTotal){
    let ocultarContenido=document.getElementById('listadoCotizaciones');
    ocultarContenido.style.display='none';
    let ocultarContenido1=document.getElementById('form');
    ocultarContenido1.style.display='none'
    let mostrarContenido=document.getElementById('detalleCoti');
    mostrarContenido.style.display='flex'
   
        let mostrar1 = `<div class="cotizacionTexto2"> 
        <h2>DETALLES DE LA COTIZACION SOLICITADA</h2> 
        La cuota a pagar de su vehiculo ${marcaGuardada} es de :$${cuotaTotal}.- <br> Auto Gama: ${gamaGyardada} <br> posee GNC: ${gncGuardada} <br> Es 0KM: ${okmGuardada} <br> Valor asegurado: $${sumaAseguradaGuardada} <br> Plan elegido: ${planGuardada}`;
        let textoDetalle=document.getElementById("detalleCoti2")
        textoDetalle.innerHTML=mostrar1
    






}

document.getElementById('btnVolver2').addEventListener('click', ()=>{
    let mostrarContenido=document.getElementById('listadoCotizaciones');
    mostrarContenido.style.display='flex';
    let ocultarContenido=document.getElementById('form');
    ocultarContenido.style.display='none';
    let ocultarContenido1=document.getElementById('detalleCoti');
    ocultarContenido1.style.display='none'

    
})




