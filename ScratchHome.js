class ScratchHome {
    constructor() {
        this.varScratch = 60;
    }
    
    getInfo() {
        return {
            "id": "ScratchHome",
            "name": "ScratchHome",
            "blocks": [ {
                            "opcode": "setColor",
                            "blockType": "command",
                            "text": "colorer [object] en [colorList] ",
                            "arguments": {
                                "object": {
                                    "type": "string",
                                    "defaultValue": "Lit bébé(827158385)"
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
                ],
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
    
    setColor({object,colorList}) {
        this.varScratch = 30;
    }
    
    switchOnOff({switchList,lamp}) {
        this.varScratch = 90;
        
    }
    /**
     * Get the current varScratch.
     * @return {number} - the current varScratch.
     */
    getVarScratch () {
            return this.varScratch;
    }
}

Scratch.extensions.register(new ScratchHome())

