const { Router } = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router.get('/api/v1/wallet', WalletController.pegaTodasAsWallets)
router.get('/api/v1/wallet/:address', WalletController.pegaUmaWallet)
router.post('/api/v1/wallet', WalletController.criaWallet)
router.put('/api/v1/wallet/:coin', WalletController.atualizaWallet)
module.exports = router
  
