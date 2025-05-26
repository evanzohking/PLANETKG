const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status = `
╭────✧〈 🚀 *${config.BOT_NAME}* 〉 ✧───◆
┴╭──────────────────๏
┃★┃✨ *Bot is Active & Online!*
┃★┃👑 *Owner:* ${config.OWNER_NAME}
┃★┃⚡ *Version:* 4.0.0
┃★┃🌐 *Prefix:* [${config.PREFIX}]
┃★┃⚙️ *Mode:* [${config.MODE}]
┃★┃💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃★┃🖥️ *Host:* ${os.hostname()}
┃★┃⌛ *Uptime:* ${runtime(process.uptime())}
┬╰──────────────────๏
╰─────···▸Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ··────◆
> ${config.DESCRIPTION}`;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363369453603973@newsletter',
                    newsletterName: 'Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
