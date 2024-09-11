
  
  WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = ['mekanism:tin_ore', 'mekanism:deepslate_tin_ore', 'mekanism:lead_ore', 'mekanism:deepslate_lead_ore', 'tfmg:lead_ore', 'tfmg:deepslate_lead_ore', 'epicsamurai:silver_ore', 'epicsamurai:deepslate_silver_ore', 'destroy:fluorite_ore', 'destroy:deepslate_fluorite_ore']
    })
  })