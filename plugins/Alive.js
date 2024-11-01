let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/GlobalTechInfo/ULTRA-MD@main/assets/qasim2.mp3'
  let url = 'https://github.com/GlobalTechInfo/ULTRA-MD'
  let murl = 'https://youtu.be/3j_EIP--2t8?si=4TFWV0On6Bl1wr-e'
  let img = 'https://i.ibb.co/jy7f9Wm/Ultra.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'qasim',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝙂𝙇𝙊𝘽𝘼𝙇 𝙈𝘿 𝙄𝙎 𝘼𝙇𝙄𝙑𝙀',
        body: '© GlobalTechInfo',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
