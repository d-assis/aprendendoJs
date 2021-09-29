function contar(){
    // Associando os nós html às respectivas variáveis
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf') 
    let passo = document.querySelector('#txtp')

    //validação de preenchimento
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }

    let cont = document.querySelector('#res')

    //trocando mensagem de contexto
    cont.innerHTML = 'Contando: <br>'

    //casos possíveis
    //2. fim menor que início, contagem decrescente
    //3. início menor que fim, contagem crescente

    // contagem crescente
    if(ini < fim){
        // tratativa de excessão para incremento nulo
        if(passo == 0){
            window.alert("Não é possível contar com passo 0. Substituindo o valor por 1.")
            passo = 1
            console.log(`passo: ${passo}`)
        }
        // algoritmo da contagem
        let i = ini
        while( i <= fim ){
            let ctg = document.createElement('strong')
            ctg.setAttribute('id',`ctg${i}`)
            ctg.innerHTML = `${i} &#x1F449;`
            cont.appendChild(ctg)
            i = i + passo
        }
        // finalizando contagem
        let end = document.createElement('strong')
        end.setAttribute('id','end')
        end.innerHTML = '&#x1F3C1'
        cont.appendChild(end)
    }
    // contagem decrescente
    else if(ini > fim){
        // tratativa de excessão para incremento nulo
        if(passo == 0){
            window.alert("Não é possível contar com passo 0. Substituindo o valor por 1.")
            passo = 1
            console.log(`passo: ${passo}`)
        }
        // algoritmo da contagem
        let i = ini
        while( i >= fim ){
            let ctg = document.createElement('strong')
            ctg.setAttribute('id',`ctg${i}`)
            ctg.innerHTML = `${i} &#x1F449;`
            cont.appendChild(ctg)
            i = i - passo
        }
        // finalizando contagem
        let end = document.createElement('strong')
        end.setAttribute('id','end')
        end.innerHTML = '&#x1F3C1'
        cont.appendChild(end)
    }
    // contagem nula
    else if(ini == fim){
        window.alert("Não é possível contar com início igual a fim. Tente novamente com novos valores")
        cont.innerHTML = 'Preparando contagem... <br>'
    }
}