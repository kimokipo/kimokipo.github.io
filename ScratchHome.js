class ScratchHome {
    static message = "vide";
    constructor() {
        this.socket = null;
        this.varScratch = "rien";
        this.wsUrl = "ws://localhost:8080/WebSocketTest/ToUpperWebsocket";
        this.connect();
    }
    
    getblocks(){
        return [ 
            {
                "opcode": "setColor",
                "blockType": "command",
                "text": "colorer [object] en [colorList] ",
                "arguments": {
                    "object": {
                        "type": "string",
                        "defaultValue": "Lit bÃ©bÃ©(827158385)"
                    },
                    "colorList": {
                        "type": "string",
                        "menu": "colorMenu"
                    }                                
                }
            },
            {
                "opcode": "switchOnOff",
                "blockType": "command",
                "text": "[switchList] le/la [lamp]",
                "arguments": {
                    "switchList": {
                        "type": "string",
                        "menu": "switchMenu"
                    },
                    "lamp": {
                        "type": "string",
                        "defaultValue":  "Suspension(296454286)"
                    },
                }
            },
            {
                "opcode": 'getVarScratch',
                "blockType": "reporter",
                "text": "varScratch"
            }
        ];
    }
    
    getInfo() {
        return {
            "id": "ScratchHome",
            "name": "ScratchHome",
            "blocks": this.getblocks(),
            "menus":{
                "colorMenu":{
                    "items": ["noir", "bleu", "cyan", "gris", "vert", "magenta", "rouge", "blanc", "jaune"]
                },
                "switchMenu":{
                    "items": ["Allumer", "Eteindre"]
                }
            }
        };
    }
    connect() {
        // open the connection if one does not exist
        if (this.socket !== null
          && this.socket.readyState !== WebSocket.CLOSED) {
          return;
        }
  
        //console.log("Trying to establish a WebSocket connection to <code>" + wsUrl + "</code>");
  
        // Create a websocket
        this.socket = new WebSocket(this.wsUrl);
  
        this.socket.onopen = function(event) {
          ScratchHome.message = "Connected!";
        };
  
        this.socket.onmessage = function(event) {
          console.log(event.data);
          ScratchHome.message = event.data;
        };
  
        this.socket.onclose = function(event) {
          ScratchHome.message = "Connection Closed";
        };
      }
  
      send(text) {
          this.socket.send(text);
      }
  
      closeSocket() {
          this.socket.close();
      }
  
      setColor({object,colorList}) {
          this.send("setColor/"+object+"/"+colorList);
      }
      
      switchOnOff({switchList,lamp}) {
          this.send("switchOnOff/"+switchList+"/"+lamp);
          
      }
      /**
       * Get the current varScratch.
       * @return {string} - the current varScratch.
       */
      getVarScratch () {
              return ScratchHome.message;
      }
}

Scratch.extensions.register(new ScratchHome())

