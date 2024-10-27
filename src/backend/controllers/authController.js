exports.signup = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    res.status(201).json({ message: 'User registered successfully' });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    const userId = null;
    const token = null;

    if (email === 'email' && password === 'password') {
        return res.status(200).json({
            userId: userId,
            token: token
        });
    }
    return res.status(401).json({ message: 'User not found' });
};