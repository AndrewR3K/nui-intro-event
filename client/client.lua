RegisterCommand('nuiopen', function()
    SendNUIMessage({
        type = 'open'
    })
    SetNuiFocus(true, true)
end)

RegisterCommand('nuiclose', function()
    SendNUIMessage({
        type = 'close'
    })
    SetNuiFocus(false, false)
end)

RegisterNUICallback('update', function(args, cb)
    print('status', args.status)
    
    if args.status == false then
        SetNuiFocus(false, false)
    end

    cb('ok')
end)

RegisterNUICallback('updatemessage', function(args, cb)
    print('Message', args.message)
    cb('ok')
end)
