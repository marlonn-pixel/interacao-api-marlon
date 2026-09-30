//REQUISIÇÃO - MÉTODO GET ( obter dados do servidor )
const api = {
    async buscarPensamentos(){
        try{
            const response = await fetch('http://localhost:3000/Pensamentos')
            return await response.json()
        }
        catch{
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

async salvarPensamentos(pensamento){
        try{
            const response = await fetch('http://localhost:3000/Pensamentos', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })

            return await response.json()

        }
        catch{
            alert('Erro ao salvar pensamentos')
            throw error
        }
    },

    async excluirPensamento(id){
        try{
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: "DELETE"
            })
        }

        catch{
            alert('Falha ao excluir o pensamento grafado')
            throw error
        }
    }
}
export default api;