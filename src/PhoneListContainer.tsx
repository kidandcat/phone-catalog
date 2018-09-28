import React from "react"
import { connect } from "react-redux"
import { RootState } from "./reducer"
import { Mobile } from "./types"
import axios from "axios"
import { Actions } from "./actions"
import { push } from 'connected-react-router'

const mapStateToProps = (state: RootState) => ({
    mobiles: state.mobiles as Mobile[]
})

const mapDispatchToProps = {
    fetchMobiles: Actions.fetchMobiles,
    fetchSuccess: Actions.fetchMobilesSuccess,
    fetchFail: Actions.fetchMobilesError,
    push
}

type ContainerProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

class PhoneListContainer extends React.Component<ContainerProps, {}> {
    render() {
        const { mobiles, push } = this.props
        return <div>
            List
            {mobiles.map(m =>
                <div onClick={() => { push("/details/" + m.id) }} key={m.id}>
                    {m.title}
                </div>)}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer)

