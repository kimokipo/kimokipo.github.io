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
                            "opcode": "setColor",
                            "blockType": "command",
                            "text": "colorer [objectList] en [colorList] ",
                            "arguments": {
                                "objectList": {
                                    "type": "string",
                                    "menu": "objectMenu"
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
                            "opcode": "switchOnOff",
                            "blockType": "command",
                            "text": "[switchList] le/la [lampList]",
                            "arguments": {
                                "switchList": {
                                    "type": "string",
                                    "menu": "switchMenu"
                                },
                                "lampList": {
                                    "type": "string",
                                    "menu": "lampMenu"
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
                "objectMenu":{
                    "items": ["Lit bébé(827158385)", "Table de nuit(1682517865)", "Lit 140x190(826012514)", "Applique murale(759297095)", "Lampadaire(1180091932)", "Source lumineuse blanche(1346157213)", "Suspension(296454286)"]
                },
                "switchMenu":{
                    "items": ["Allumer", "Eteindre"]
                },
                "lampMenu":{
                    "items": ["Applique murale(759297095)", "Lampadaire(1180091932)", "Source lumineuse blanche(1346157213)", "Suspension(296454286)"]
                }
            }
        };
    }
    
    setColor({objectList,colorList}) {
        this.varScratch = 30;
    }
    
    switchOnOff({switchList,lampList}) {
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

