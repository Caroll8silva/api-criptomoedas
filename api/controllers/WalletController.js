const database = require('../models')

class WalletController {
     static async pegaTodasAsWallets(req, res){
        try {

            const todasAsWallets = await database.Wallets.findAll({
                attributes: { exclude: [ 'CoinCoin' ]}
            })
        return res.status(200).json(todasAsWallets) 
    
    }   catch (error) {

        return res.status(500).json(error.message)
    }
}
//     static async pegaUmNome(req, res){
//         const { name } = req.query
//         try {

//         const umNome = await database.Wallets.findOne({
//             where: {

//                 name: name

//             }
//         })
//         return res.status(200).json(umNome) 

// }       catch (error) {

//         return res.status(500).json(error.message)

// }

    
// }

static async criaWallet(req, res) {
    const novaWallet = req.body
    try {
        
        const novaWalletCriada = await database.Wallets.create(novaWallet, {



        })
        return res.status(200).json(novaWalletCriada)
        
    } catch (error) {

        return res.status(500).json(error.message)
    }
}
}

module.exports = WalletController