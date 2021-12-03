

export const getCoffeesStore = (state) => state.coffees;
export const getCoffeesData = (state) => getCoffeesStore(state).data;
export const getCoffeesLoading = (state) => getCoffeesStore(state).isLoading;
export const getCoffeesError = (state) => getCoffeesStore(state).isError;

export  const coffeesSelectors={
    getCoffeesStore,
    getCoffeesData,
    getCoffeesLoading,
    getCoffeesError,
};