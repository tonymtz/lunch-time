import React from 'react';

const IngredientsContext = React.createContext({});
const MealsContext = React.createContext({});
const EventsContext = React.createContext({});

export const IngredientsProvider = IngredientsContext.Provider;
export const IngredientsConsumer = IngredientsContext.Consumer;

export const MealsProvider = MealsContext.Provider;
export const MealsConsumer = MealsContext.Consumer;

export const EventsProvider = EventsContext.Provider;
export const EventsConsumer = EventsContext.Consumer;
