import React, { Component } from 'react'
import cx from 'classnames'

import Paragraph from './typography/Paragraph.jsx'
import ResultsList from './ResultsList.jsx'

import './ResultsContainer.scss'

const items = [{
        "kind": "customsearch#result",
        "title": "19+ The 30-Second Trick for Rustic Industrial Decor ...",
        "htmlTitle": "19+ The 30-Second Trick for Rustic <b>Industrial</b> Decor ...",
        "link": "https://i.pinimg.com/736x/7c/2e/58/7c2e5881419569787c272ea924e1e4a2.jpg",
        "displayLink": "www.pinterest.com",
        "snippet": "19+ The 30-Second Trick for Rustic Industrial Decor ...",
        "htmlSnippet": "19+ The 30-Second Trick for Rustic <b>Industrial</b> Decor ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.pinterest.com/pin/637681628467082245/",
            "height": 993,
            "width": 662,
            "byteSize": 68422,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ536hdW_NgfQyDXpvOpfyFoDWWdl-FDaScFklNQJCXoiCdLrZ2K6TAbw&s",
            "thumbnailHeight": 149,
            "thumbnailWidth": 99
        }
    },
    {
        "kind": "customsearch#result",
        "title": "75 Beautiful Industrial Kitchen Pictures & Ideas - August, 2020 ...",
        "htmlTitle": "75 Beautiful <b>Industrial Kitchen</b> Pictures &amp; Ideas - August, 2020 ...",
        "link": "https://st.hzcdn.com/simgs/685141fc0cc9fd7a_14-1506/home-design.jpg",
        "displayLink": "www.houzz.com",
        "snippet": "75 Beautiful Industrial Kitchen Pictures & Ideas - August, 2020 ...",
        "htmlSnippet": "75 Beautiful <b>Industrial Kitchen</b> Pictures &amp; Ideas - August, 2020 ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.houzz.com/photos/industrial-kitchen-ideas-phbr1-bp~t_709~s_2113",
            "height": 1766,
            "width": 2560,
            "byteSize": 607664,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLnXvtbOrK2CxQGZZdTuBsgrVFPCtuxnFuLV-8cEv-nPv18ELTBIudg&s",
            "thumbnailHeight": 103,
            "thumbnailWidth": 150
        }
    },
    {
        "kind": "customsearch#result",
        "title": "DcorStore on Instagram | Industrial style kitchen | Industrial ...",
        "htmlTitle": "DcorStore on Instagram | <b>Industrial</b> style <b>kitchen</b> | <b>Industrial</b> ...",
        "link": "https://i.pinimg.com/originals/d6/06/f6/d606f6ffc74b9f7cb8eee56157520b4b.jpg",
        "displayLink": "www.pinterest.com",
        "snippet": "DcorStore on Instagram | Industrial style kitchen | Industrial ...",
        "htmlSnippet": "DcorStore on Instagram | <b>Industrial</b> style <b>kitchen</b> | <b>Industrial</b> ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.pinterest.com/pin/324681454384876101/",
            "height": 1350,
            "width": 1080,
            "byteSize": 222226,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTseyLYjKBwvxzlVDs4cWpywqgc8E3XytOFAX1QLlLMfH0CeP-MNfCJGY&s",
            "thumbnailHeight": 150,
            "thumbnailWidth": 120
        }
    },
    {
        "kind": "customsearch#result",
        "title": "32 Industrial Style Kitchens That Will Make You Fall In Love",
        "htmlTitle": "32 <b>Industrial</b> Style <b>Kitchens</b> That Will Make You Fall In Love",
        "link": "http://cdn.home-designing.com/wp-content/uploads/2017/02/kitchen-island-industrial-style-adjustable-lamps.jpg",
        "displayLink": "www.home-designing.com",
        "snippet": "32 Industrial Style Kitchens That Will Make You Fall In Love",
        "htmlSnippet": "32 <b>Industrial</b> Style <b>Kitchens</b> That Will Make You Fall In Love",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "http://www.home-designing.com/industrial-style-kitchen-cabinet-shelving-decor-design-ideas",
            "height": 806,
            "width": 1200,
            "byteSize": 270847,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZe0jpEF5ntOOp3fwXDb0xP9aBL2NLMYfw6UoaMonIQnkjGU2RjS_rw&s",
            "thumbnailHeight": 101,
            "thumbnailWidth": 150
        }
    },
    {
        "kind": "customsearch#result",
        "title": "15 Outstanding Industrial Kitchens | Home Design Lover ...",
        "htmlTitle": "15 Outstanding <b>Industrial Kitchens</b> | Home Design Lover ...",
        "link": "https://i.pinimg.com/originals/ee/59/93/ee599324c1273303b3baf630e0e4228d.jpg",
        "displayLink": "www.pinterest.com",
        "snippet": "15 Outstanding Industrial Kitchens | Home Design Lover ...",
        "htmlSnippet": "15 Outstanding <b>Industrial Kitchens</b> | Home Design Lover ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.pinterest.com/pin/141089400802981905/",
            "height": 427,
            "width": 600,
            "byteSize": 63748,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nXi8l2LJ6xR8CKidAN7nedmze6o1pdk9YH3lywDF62bsBQGXMAgkgo8&s",
            "thumbnailHeight": 96,
            "thumbnailWidth": 135
        }
    },
    {
        "kind": "customsearch#result",
        "title": "Industrial style in kitchen design | Snaidero",
        "htmlTitle": "<b>Industrial</b> style in <b>kitchen</b> design | Snaidero",
        "link": "https://www.snaidero.com/sites/default/files/repository/images/versioni/cucine-classiche-con-isola-frame-snaidero-8.jpg",
        "displayLink": "www.snaidero.com",
        "snippet": "Industrial style in kitchen design | Snaidero",
        "htmlSnippet": "<b>Industrial</b> style in <b>kitchen</b> design | Snaidero",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.snaidero.com/blog/industrial-style-kitchen-5-tips-get-it-right",
            "height": 1429,
            "width": 2000,
            "byteSize": 563204,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6pkSX9rPs0Yt0FKgfU2EaGoZKw6bT2b2ZTWFNFHHFBdv91pFxl8VQLk&s",
            "thumbnailHeight": 107,
            "thumbnailWidth": 150
        }
    },
    {
        "kind": "customsearch#result",
        "title": "Industrial Contemporary Kitchen by Snadeiro | Industrial decor ...",
        "htmlTitle": "<b>Industrial</b> Contemporary <b>Kitchen</b> by Snadeiro | <b>Industrial</b> decor ...",
        "link": "https://i.pinimg.com/originals/8c/8b/e6/8c8be6125dcfed664b26e7c1101f5502.jpg",
        "displayLink": "www.pinterest.com",
        "snippet": "Industrial Contemporary Kitchen by Snadeiro | Industrial decor ...",
        "htmlSnippet": "<b>Industrial</b> Contemporary <b>Kitchen</b> by Snadeiro | <b>Industrial</b> decor ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.pinterest.com/pin/387872586638027331/",
            "height": 1024,
            "width": 717,
            "byteSize": 140018,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-BUJLT6wzOGkNkSvfnGxxkD2W-YftrdEuXSrLDQdjCL0m2aYJW0-xv0&s",
            "thumbnailHeight": 150,
            "thumbnailWidth": 105
        }
    },
    {
        "kind": "customsearch#result",
        "title": "75 Beautiful Industrial Kitchen Pictures & Ideas - August, 2020 ...",
        "htmlTitle": "75 Beautiful <b>Industrial Kitchen</b> Pictures &amp; Ideas - August, 2020 ...",
        "link": "https://st.hzcdn.com/fimgs/4d21e4060db09da3_5745-w312-h312-b0-p0--industrial-kitchen.jpg",
        "displayLink": "www.houzz.com",
        "snippet": "75 Beautiful Industrial Kitchen Pictures & Ideas - August, 2020 ...",
        "htmlSnippet": "75 Beautiful <b>Industrial Kitchen</b> Pictures &amp; Ideas - August, 2020 ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.houzz.com/photos/industrial-kitchen-ideas-phbr1-bp~t_709~s_2113",
            "height": 312,
            "width": 312,
            "byteSize": 32567,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-YNXEXv_FafsLT0Q4KUqBWgl-hX_l9x7wwf_YPW2-TTOYbdICPuSdA&s",
            "thumbnailHeight": 117,
            "thumbnailWidth": 117
        }
    },
    {
        "kind": "customsearch#result",
        "title": "Kitchen Ideas | Industrial style kitchen, Kitchen inspiration ...",
        "htmlTitle": "<b>Kitchen</b> Ideas | <b>Industrial</b> style <b>kitchen</b>, <b>Kitchen</b> inspiration ...",
        "link": "https://i.pinimg.com/originals/d7/1d/d8/d71dd89c068851ffcad32b79ad37aa5a.jpg",
        "displayLink": "www.pinterest.com",
        "snippet": "Kitchen Ideas | Industrial style kitchen, Kitchen inspiration ...",
        "htmlSnippet": "<b>Kitchen</b> Ideas | <b>Industrial</b> style <b>kitchen</b>, <b>Kitchen</b> inspiration ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.pinterest.com/pin/60657926216532703/",
            "height": 1445,
            "width": 768,
            "byteSize": 149211,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAi7BN2Uec4nev49PB50mxK19EusKw53KAWWcR6gi8IP0NViUHmXtpLKw&s",
            "thumbnailHeight": 150,
            "thumbnailWidth": 80
        }
    },
    {
        "kind": "customsearch#result",
        "title": "75 Beautiful Industrial Kitchen Pictures & Ideas - August, 2020 ...",
        "htmlTitle": "75 Beautiful <b>Industrial Kitchen</b> Pictures &amp; Ideas - August, 2020 ...",
        "link": "https://st.hzcdn.com/simgs/bb1125d208ea478b_14-4375/home-design.jpg",
        "displayLink": "www.houzz.com",
        "snippet": "75 Beautiful Industrial Kitchen Pictures & Ideas - August, 2020 ...",
        "htmlSnippet": "75 Beautiful <b>Industrial Kitchen</b> Pictures &amp; Ideas - August, 2020 ...",
        "mime": "image/jpeg",
        "fileFormat": "image/jpeg",
        "image": {
            "contextLink": "https://www.houzz.com/photos/industrial-kitchen-ideas-phbr1-bp~t_709~s_2113",
            "height": 2160,
            "width": 2560,
            "byteSize": 789140,
            "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyfNqlgnwlJUP81hu2HtYCL6sQI1KzvDCkC2if5rAHlQvG_uWAE0rtg&s",
            "thumbnailHeight": 127,
            "thumbnailWidth": 150
        }
    }
]

class ResultsContainer extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        className: '',
    }

    render() {
        return (
            <>
                <div className='steps-options-containers results'>
                    <Paragraph small>Inspirations for:</Paragraph>
                    <Paragraph medium>Change query</Paragraph>
                </div>
                <ResultsList items={items} />
            </>
        )
    }
}

export default ResultsContainer
