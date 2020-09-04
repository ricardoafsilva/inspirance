import axios, { AxiosInstance } from 'axios'
import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup } from 'axios-cache-adapter'

export default {
    getData(selectedRoom: string, selectedStyle: string): Promise<void | ResultItemInterface> {
        async function configure(): Promise<AxiosInstance> {
            await localforage.defineDriver(memoryDriver)

            const store = localforage.createInstance({
                driver: [
                    localforage.INDEXEDDB,
                    localforage.LOCALSTORAGE,
                    memoryDriver._driver
                ],
                name: 'inspirance-cache'
            })

            return setup({
                baseURL: 'https://www.googleapis.com/customsearch/v1',
                method: 'GET',
                params: {
                    key: process.env.INPIRANCE_KEY,
                    cx: process.env.CUSTOM_SEARCH_KEY,
                    q: `${selectedRoom}+${selectedStyle}+decor`,
                    searchType: 'image',
                },
                cache: {
                    maxAge: 15 * 60 * 1000,
                    store
                }
            })
        }

        return configure().then(async (api) => {
            return await api.get('').then(response => {
                return response.data.items
            })
        })
    }
}
