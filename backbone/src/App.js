define([
    'underscore',
    'jquery',
    'Views/HomeView',
    '../../../core/dist/bundle',
], (_, $, HomeView, Core) => {
    const homeView = new(HomeView())({
        el: $('#main')
    })

    window.addEventListener('requestResultsList', (e) => {
        let selectedRoom = e.detail.selectedRoom,
            selectedStyle = e.detail.selectedStyle

        Core.default.getData(selectedRoom, selectedStyle).then((response) => {
            window.dispatchEvent(
                new CustomEvent('setResultsItems', {
                    detail: {
                        results: response,
                        selectedRoom: selectedRoom,
                        selectedStyle: selectedStyle,
                    },
                })
            )
        })
    })

    return this
})
