import axios from 'axios'

export default {
    async getData(selectedRoom: string, selectedStyle: string): Promise<ResultItemInterface> {
        return axios({
            'method': 'GET',
            'url': 'https://www.googleapis.com/customsearch/v1',
            'headers': {},
            'params': {
                'key': process.env.INPIRANCE_KEY,
                'cx': process.env.CUSTOM_SEARCH_KEY,
                'q': `${selectedRoom}+${selectedStyle}+decor`,
                'searchType': 'image',
            },
        }).then(response => {
            return response.data.items
        })
    }
}
