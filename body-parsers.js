const {Router} = require('express');

const router = Router();

router.use(express.json());
router.use(cors());

module.exports = router;
