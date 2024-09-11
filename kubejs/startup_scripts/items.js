// priority: 0

StartupEvents.registry("item", (event) => {
  let item = (name) => {
    let id = name.toLowerCase().replace(/ /g, "_");
    event.create(id).texture(`kubejs:item/${id}`).displayName(name);
  };
//  item("Steel balls");
  item("Unfinished processor");
  item("Plasteel");
  item("Unfinished plasteel");
  item("Unfinished solar cell");
  item("Unfinished electric casing");
  item("Imprecision mechanism");
  item("Wooden element");
  item("Circle");
  item("Triangle");
});
