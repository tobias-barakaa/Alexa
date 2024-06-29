const verifyAdmin = (req, res, next) => {
    const { role } = req.user; // Assuming req.user contains the authenticated user's details
    if (role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};