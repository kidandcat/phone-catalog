import React from "react"
import { connect } from "react-redux"
import { RootState } from "./reducer"
import { Mobile } from "./types"
import { Actions } from "./actions"
import { push } from 'connected-react-router'
import ListView from "react-uwp/ListView"
import { ScaleInOut } from "react-uwp/Animate"

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

class PhoneListContainer extends React.Component<ContainerProps> {
    render() {
        const { mobiles, push } = this.props
        return <React.Fragment>
            <ScaleInOut speed={1000}>
                <ListView background="rgba(255,255,255,0.1)" listSource={mobiles.map(m => ({
                    itemNode: <div style={{ margin: 5 }} onClick={() => { push("/details/" + m.id) }} key={m.id}>
                        {m.title}
                    </div>
                }))}>
                </ListView>
            </ScaleInOut>
        </React.Fragment>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer)

