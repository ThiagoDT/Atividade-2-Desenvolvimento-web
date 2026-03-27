const input = document.getElementById("search-input");
const result = document.getElementById("result");


function showMenssage(menssage, type){
    result.innerHTML= menssage;
    result.className=`result ${type}`;
}

async function handlCepSearch(){
    const rawCep = input.value.replace(/\D/g,"");
    if(rawCep.length!=8){
        showMenssage("CEP INVALIDO  use 8 numeros","error");
    }
    else
    {
        const response= await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
        if(response.ok){
            const data = await response.json();
            if(data.erro){
                showMenssage("CEP Não encontrado","error");
            }
            else{
            const menssage =`<p><strong>CEP: </strong>${data.cep}</p>
                            <p><strong>Locadouro: </strong>${data.logradouro}</p>
                            <p><strong>Complimento: </strong>${data.complemento}</p>
                            <p><strong>Bairro: </strong>${data.bairro}</p>
                            <p><strong>Cidade: </strong>${data.localidade}</p>
                            <p><strong>UF: </strong>${data.uf}</p>
                            <p><strong>Estado: </strong>${data.estado}</p>
                            <p><strong>Região: </strong>${data.regiao}</p>
                            <p><strong>DDD: </strong>${data.ddd}</p>`;

            showMenssage(menssage,"success");
            }
        }else{
            showMenssage("Falha do serviço","error");
        }
    }
    
}

input.addEventListener("keydown", function(event){
    if(event.key=="Enter")
    {
       handlCepSearch();
    }
});

input.addEventListener("input", function(event){
    if(input.value.trim()==""){
        result.innerHTML="";
        result.className = "result"
    }
});