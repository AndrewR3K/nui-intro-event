RegisterCommand('open', function()
    SendNUIMessage({
        type = 'open'
    })  
end)

RegisterNUICallback('update', function(args, cb)
    -- print('status', args.status)
    cb('ok')
end)