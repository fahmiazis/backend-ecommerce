const { Router } = require('express')
const { getProfile, updateProfile, getCheckout, updateImage, getAddress, updateProfileVii } = require('../controllers/profile')
const { buy, getHistoryTransaction } = require('../controllers/transaction')
const uploadHelper = require('../helpers/upload')
const router = Router()

router.get('/', getProfile)
router.patch('/seller')
router.patch('/customer', updateProfileVii)
router.patch('/customer/img', uploadHelper, updateImage)
router.get('/checkout', getCheckout)
router.get('/address', getAddress)
router.post('/buy', buy)
router.get('/history', getHistoryTransaction)

module.exports = router
