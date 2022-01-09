const database = require('../models')

class WalletController {
     static async pegaTodasAsWallets(req, res){
        try {

            const todasAsWallets = await database.Wallets.findAll({
                attributes: { exclude: [ 'CoinCoinId' ]}
            })
        return res.status(200).json(todasAsWallets) 
    
    }   catch (error) {

        return res.status(500).json(error.message)
    }
}
      static async pegaUmaWallet(req, res){
         const { address } = req.query
         try {

       const umaWallet = await database.Wallets.findOne({
        attributes: {where: { address: Number(address)}, exclude: [ 'CoinCoinId' ]}
        })
         return res.status(200).json(umaWallet) 

 }       catch (error) {

         return res.status(500).json(error.message)

 }

    
 }

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