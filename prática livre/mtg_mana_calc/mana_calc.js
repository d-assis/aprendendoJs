function land_calc(tLand, ws, us, bs, rs, gs){
    // tratamento dos inputs
    ws = Number.parseInt(ws)
    us = Number.parseInt(us)
    bs = Number.parseInt(bs)
    rs = Number.parseInt(rs)
    gs = Number.parseInt(gs)

    //cálculo do número total de símbolos
    tSim = ws + us + bs + rs + gs

    //cálculo da porcentagem de cada símbolo
    wsP = Math.round((ws*100)/tSim)

    usP = Math.round((us*100)/tSim)

    bsP = Math.round((bs*100)/tSim)

    rsP = Math.round((rs*100)/tSim)

    gsP = Math.round((gs*100)/tSim)

    //cálculo dos terrenos 

    wl = Math.round((tLand*wsP)/100)

    ul = Math.round((tLand*usP)/100)

    bl = Math.round((tLand*bsP)/100)

    rl = Math.round((tLand*rsP)/100)

    gl = Math.round((tLand*gsP)/100)

    console.log(`adicione ${wl} planícies, ${ul} ilhas, ${bl} pântanos, ${rl} montanhas e ${gl} florestas.`)
}