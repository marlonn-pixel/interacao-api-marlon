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

async salvarPensamentos(){
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
    }
}
export default api;