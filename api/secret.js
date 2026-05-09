export default function handler(req, res) {
    res.status(200).json({ s: process.env.CHAT_SECRET || "" });
}
