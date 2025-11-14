const out = document.getElementById("output");
const sec = document.getElementById("sec");
const conc = document.getElementById("conc");

function log(msg){
    out.textContent += msg + "\n"
}

function tarea(nombre,tiempo){
    return new Promise(res=>{
        log(`${nombre} inicia su tarea`);
        setTimeout(()=>{
            log(`El alumno ${nombre} termino su tarea en ${tiempo/1000}s`);
            res();
        },tiempo

        )
    })
}

sec.onclick = async () =>{
    out.textContent="";
    log("Ejemplo secuencial");
    const inicio = performance.now();
    await tarea("Angel",3000);
    await tarea("Abdiel",2000);

    log(`Tiempo total de ejecucion: ${((performance.now()-inicio) /1000).toFixed(2)}s`);
}

conc.onclick = async () =>{
    out.textContent="";
    log("Ejemplo concurrente");
    const inicio = performance.now();

    await Promise.all(
        [
            tarea("Benitez", 3000),
            tarea("Leon", 1000)
        ]
    );

    log(`Tiempo total de ejecucion: ${((performance.now()-inicio) /1000).toFixed(2)}s`);
}