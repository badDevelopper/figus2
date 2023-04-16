                     case 'figemoji':
                     case 'figroblox':
                     case 'figmeme':
                     case 'figanime':
                     case 'figcoreana':
                     case 'figraiva': 
                     case 'figengracada':  
                     case 'figdesenho':
                     case 'fig':      
                        if (!q) return reply("Insira a qnd de figu que deja que eu envie")
                        if (!Number(args[0]) || Number(q.trim()) > 5) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 5..")
                           const owner = ' '; //Teu nome no gitHub
                           const repo = ' '; //Nome do teu repo
                           async function figugit() {
                           fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${command}`).then(response => response.json()).then(data => {     
                           const randomIndex = Math.floor(Math.random() * data.length);
                           //console.log(data);
                          conn.sendMessage(from, { sticker: { url:`https://raw.githubusercontent.com/${owner}/${repo}/main/${command}/${data[randomIndex].name}` } })
                        })}
                        for (i = 0; i < q; i++) {
                           await sleep(1880) // N PODE SER INFERIOR A 1000 POIS DA ERRO
                           figugit()
                        }
                        break