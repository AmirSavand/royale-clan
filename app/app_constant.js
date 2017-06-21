"use strict";

/**
 * @name constant
 * @desc App constants
 */
app.constant("Constant", {
  scores: {
    role: {
      leader: 350,
      coleader: 200,
      elder: 100,
      member: 0
    },
    donation: {
      s: 200,
      a: 100,
      b: 75,
      c: 50,
      d: 0
    },
    rarity: {
      legendary: 200,
      epic: 100,
      rare: 50,
      common: 0
    },
    tag: 50
  },
  tags: {
    "godlike": {
      font: "user-secret",
      sentence: "is the creator of clan."
    },
    "clan chest master": {
      font: "trophy",
      sentence: "won the Clan Chest Master (1st)."
    },
    "clan battle master": {
      font: "shield",
      sentence: "won the Clan Battle Master (1st)."
    },
    "whatsapp": {
      font: "whatsapp",
      sentence: "has joined the clan's WhatsApp group."
  env: {
    api: {
      royaleClan: "http://royaleclan:8000/",
      clashApi: "http://www.clashapi.xyz/api/"
    }
  },
  roles: [
    "member",
    "elder",
    "coleader",
    "leader",
  ],
  sorts: {
    rarity: {
      common: 0,
      rare: 1,
      epic: 2,
      legendary: 3
    },
    type: {
      Troop: 0,
      Spell: 1,
      Building: 2
    }
  }
});
