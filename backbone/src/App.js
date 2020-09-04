define([
    'underscore',
    'jquery',
    'Collections/ResultsCollection',
    'Views/HomeView',
    'core_bundle',
], (_, $, ResultsCollection, HomeView, Core) => {
    const results = new ResultsCollection()

    const homeView = new(HomeView())({
        el: $('#main')
    })

    window.addEventListener('requestResultsList', (e) => {
        let selectedRoom = e.detail.selectedRoom,
            selectedStyle = e.detail.selectedStyle

        Core.default.getData(selectedRoom, selectedStyle).then((response) => {
            results.reset(response)
            window.dispatchEvent(
                new CustomEvent('setResultsItems', {
                    detail: {
                        results: results.toJSON(),
                        selectedRoom: selectedRoom,
                        selectedStyle: selectedStyle,
                    },
                })
            )
        })
    })

    return this
})
