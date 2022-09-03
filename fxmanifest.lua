fx_version 'adamant'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

game 'rdr3'
lua54 'yes'

author 'Bytesizd'

client_scripts { 
    'client/*.lua'
}
shared_scripts {
    'config.lua'
}

files {
    'ui/*',
    'ui/vendor/*',
    'ui/assets/*',
    'ui/assets/fonts/*',
    'ui/assets/icons/*'
}
    
ui_page 'ui/index.html'

dependencies { 
    'vorp_core'
}

version '1.0'