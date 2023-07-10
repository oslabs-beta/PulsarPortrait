import React from 'react'

export default function GraphData() {
    const graphData = {
        'messagesIn': "http://localhost:3000/d/c2ef0e4a-da28-4797-bd86-5c1957aa9039/newmessagesin?orgId=1&refresh=5s&viewPanel=1&viewPanel=1&kiosk",
        'messagesOut': "http://localhost:3000/d/b7cc76a7-51f0-4175-bbbc-dada7ec3fa2d/messagesout?orgId=1&refresh=5s&viewPanel=1&kiosk",
        'backlog': "http://localhost:3000/d/d20d409b-6974-4ca4-b16c-fc74c6aa7cd1/newbacklog?orgId=1&refresh=5s&viewPanel=1&kiosk",

    }
    return (
        { graphData }
    )
}
