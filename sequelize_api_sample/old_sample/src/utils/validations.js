exports.validatePet = (req, res, next) => {
   const { name, age } = req.body;
   if (!name || typeof name !== 'string') {
       return res.status(400).json({ error: 'Invalid or missing name' });
   }
   if (!age || typeof age !== 'number') {
       return res.status(400).json({ error: 'Invalid or missing age' });
   }
   next();
};
