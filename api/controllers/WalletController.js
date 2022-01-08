const database = require('../models')

class WalletController {
     static async pegaTodasAsWallets(req, res){
        try {

            const todasAsWallets = await database.Wallets.findAll({
                attributes: { exclude: ['id', 'coin']}
            })
            return res.status(200).json(todasAsWallets) 
    
    }   catch (error) {

        return res.status(500).json(error.message)

    }
}
}

module.exports = WalletController