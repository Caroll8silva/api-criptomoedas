const { Router } = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router.get('/api/v1/wallet', WalletController.pegaTodasAsWallets)
//router.get('/api/v1/wallet/:name', WalletController.pegaUmNome)
router.post('/api/v1/wallet', WalletController.criaWallet)
module.exports = router