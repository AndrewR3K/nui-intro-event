--TODO: Add Metabolism

Config = {}

-- Active language/locale
Config.defaultlang = "en_lang"

Config.DecayTime = 1000 --How often the decay occurs (miliseconds) CURRENTLY DECAY ANIMATION BREAKS IF HIGHER THAN 0
Config.StoreToDB = 60000 * 3 --Store Status to DB every 3 minute

Config.Hunger = {
    OuterCore = {
        Max =  1000,
        Starting = 1000,
        Decay = {   
            Still = 1,
            Walking = 2,
            Running = 5
        }
    },
    InnerCore = {
        Starting = 1000,
        Max =  1000,
        Decay = 5,
        Grow = 5
    }
}

Config.Thirst = {
    OuterCore = {
        Max =  1000,
        Starting = 1000,
        Decay = {   
            Still = 2,
            Walking = 3,
            Running = 6
        }
    },
    InnerCore = {
        Starting = 1000,
        Max =  1000,
        Decay = 5,
        Grow = 5
    }
}