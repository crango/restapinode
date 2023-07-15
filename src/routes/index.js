const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        'name': 'Hola',
        'website': 'mypage.com'
    }
    res.json(data);
});

module.exports = router;