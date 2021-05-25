import React from 'react'

import EventSummaryContainer from '../container/EventSummaryContainer'
import CongraturationContainer from '../container/CongraturationContainer'

export default ({ match }) => {
    const { mode } = match.params;

    return (
        <>
            {<EventSummaryContainer />}
        </>
    )
}