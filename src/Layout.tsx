import React from "react"
import { connect } from "react-redux"
import { RootState } from "./reducer"
import { Mobile } from "./types"
import { Actions } from "./actions"
import { push } from 'connected-react-router'

const mapStateToProps = (state: RootState) => ({
    mobiles: state.mobiles as Mobile[],
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
        return <div style={{
            display: "flex",
            width: "99vw",
            height: "99vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {this.props.children}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer)

