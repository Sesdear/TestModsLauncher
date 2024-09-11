// priority: 0

StartupEvents.registry('block', event => {

  event.create('pig_tuff')
  .displayName('Pig tuff')
  .soundType('stone')
  .hardness(0.2)
  .resistance(78)
  .tagBlock('minecraft:mineable/pickaxe')
  .requiresTool(true)

  //event.create('packed_logs')
  //.displayName('Packed logs')
  //.soundType('wood')
  //.hardness(0.1)
  //.resistance(56)
  //.tagBlock('minecraft:mineable/axe')
  //.requiresTool(true)
  //.texture('north', 'kubejs/assets/kubejs/textures/block/packed_logs_top.png')
  //.texture('east', 'kubejs/assets/kubejs/textures/block/packed_logs_top.png')
  //.texture('west', 'kubejs/assets/kubejs/textures/block/packed_logs.png')
  //.texture('south', 'kubejs/assets/kubejs/textures/block/packed_logs.png')
  //.texture('top', 'kubejs/assets/kubejs/textures/block/packed_logs.png')
  //.texture('down', 'kubejs/assets/kubejs/textures/block/packed_logs.png')

});

