import { defineStore } from 'pinia';

interface counterOptionsStoreState {
    count: number;
    lastChanged?: Date;
}
export const useCounterOptionsStore = defineStore('counterOptions', {

    state: () => ({
        count: 0,
        lastChanged: undefined
    } as counterOptionsStoreState ),

    getters: {
        squareCount: (state) => state.count * state.count
    },

    actions: {
        incrementBy(value: number){
            this.count += value;
            this.lastChanged = new Date();
        },

        increment (){
            this.incrementBy(1);
        }
    }
});