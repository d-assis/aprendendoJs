function land_calc(tLand, ws, us, bs, rs, gs){
    let args = Array.from(arguments).slice(1);
    let tSim = args.reduce((acc,pip) => acc + pip, 0)
    let output = []
    
   /* for(let i = 1; i < args.length; i++){
        tSim = tSim + args[i]
    }*/
    
    /*args.forEach(function loop(pip){
        tSim = tSim + pip
    })*/

    //args.forEach(pip => tSim = tSim + pip)

    for(let i = 0; i <= args.length; i++){
        output.push(Math.round(tLand*args[i]/tSim))
    }

    //return (output) 
    return {
        "plains" : output[0],
        "island" : output[1],
        "swamp" : output[2],
        "mountain" : output[3],
        "forest" : output[4]
    }

}