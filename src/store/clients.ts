import type { Client } from '@/clients/interfaces/client';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useclientsStore = defineStore( 'clients', () => {

const currentPage = ref<number>(1);
const totalPages = ref<number>(5);
const clients = ref<Client[]>([]);

return {
    //state properties
    currentPage,
    totalPages,
    clients,

    //getters
    //squareCount: computed( () => count.value * count.value ),

    //actions
    setClients( newClients: Client[] ){
        clients.value = newClients;
    },
    setPage( page: number ){
        if ( currentPage.value === page ) return;
        currentPage.value = page;
    }
}
});