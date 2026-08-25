// File: api/proxy-tme.js

module.exports = async (req, res) => {

    try {

        const path = req.url;

        const response = await fetch(
            "https://t.me" + path,
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
                        "AppleWebKit/537.36 (KHTML, like Gecko) " +
                        "Chrome/150.0.0.0 Safari/537.36",

                    "Accept":
                        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",

                    "Accept-Language":
                        "fa-IR,fa;q=0.9,en-US;q=0.8,en;q=0.7"
                }
            }
        );


        const data = await response.text();


        res.status(response.status);

        res.setHeader(
            "Content-Type",
            response.headers.get("content-type") ||
            "text/html; charset=utf-8"
        );


        res.send(data);


    } catch (error) {

        console.error(
            "Telegram proxy error:",
            error
        );


        res.status(500).json({
            error: "Telegram proxy failed",
            message: error.message
        });
    }
};
