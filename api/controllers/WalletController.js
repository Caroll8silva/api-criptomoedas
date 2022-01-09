const database = require('../models')

class WalletController {
   
    static async pegaTodasAsWallets(req, res) {
        
        try {

            const todasAsWallets = await database.Wallets.findAll({
               
                include: [{
                  
                    model: database.Coins,
                   
                    attributes: ['coin', 'fullname', 'amont'],
                    
                    as: 'Coins',
                   
                    include: [{
                        
                        model: database.Transactions,
                       
                        attributes: ['value', 'datetime', 'sendTo', 'receiveFrom', 'currentCotation'],
                        
                        as: 'Transactions'
                    }]
                }]
            })

            return res.status(200).json(todasAsWallets)

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaWallet(req, res) {
        
        const { address } = req.params

        try {

            const umaWallet = await database.Wallets.findOne({
                where: {

                    address: Number(address)
                }
            })

            return res.status(200).json(umaWallet)

        } catch (error) {

            return res.status(500).json(error.message)

        }

    }

    static async criaWallet(req, res) {
        
        const novaWallet = req.body
       
        try {

            const novaWalletCriada = await database.Wallets.create(novaWallet, {})

            return res.status(201).json(novaWalletCriada)

        } catch (error) {

            return res.status(500).json(error.message)
        }
    }
    
    static async atualizaWallet(req, res) {

        const { coin } = req.params

        const novasInfos = req.body

        try {

            await database.Wallets.update(novasInfos, {
               
                where: {
                    
                    coin: Number(coin)
                }
            })
            
            const walletAtualizada = await database.Wallets.findOne({
                
                where: {
                    coin: Number(coin)
                }
            })

            return res.status(200).json(walletAtualizada)

        } catch (error) {

            return res.status(500).json(error.message)
        }

    }
    static async apagaWallet(req, res) {

        const { address } = req.params
        
        try {
             await database.Wallets.destroy({ where: {

                address: Number(address)
            
            } })

            return res.status(204).json()

        } catch (error) {

            return res.status(404).json(error.message)
        }
    }

    static async transfereWallet(req, res) {
        
        const transferirWallet = req.body
       
        try {

            const walletTransferida = await database.Transactions.create(transferirWallet, {})

            return res.status(201).json(walletTransferida)

        } catch (error) {

            return res.status(404).json(error.message)
        }
    }
}

module.exports = WalletController