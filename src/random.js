function characterCreation(charType) {
  return function(level) {
    return function(strength) {
      return function(dexterity) {
        return function(intelligence) {
          return function(health) {
            return (state) => ({
              ...state,
              ["charType"]: state["charType"] = charType,
              ["level"]: state["level"] = level,
              ["strength"]: state["strength"] = strength,
              ["dexterity"]: state["dexterity"] = dexterity,
              ["intelligence"]: state["intelligence"] = intelligence,
              ["health"]: state["health"] = health

            });
          };
        };
      };
    };
  };
}