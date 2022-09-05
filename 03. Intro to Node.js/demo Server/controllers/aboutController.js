const about = `
<html>
<head>
    <title>My Page - About</title>
</head>
<body>
    <div>
        <h1>About us</h1>
        <p>About Page!</p>
    </div>
</body>
</html>`;

module.exports = (req, res) => {
    res.write(about);
    res.end();
}