const homePage = `
<html>
<head>
    <title>My Page - Welcome</title>
</head>
<body>
    <div>
        <h1>My Page</h1>
        <p>Welcome to My Page!</p>
    </div>
</body>
</html>`;

module.exports = (req, res) => {
    res.write(homePage);
    res.end();
};