import React from "react";
import { connect } from "react-redux";
import { RootState } from "./reducer";
import { Mobile } from "./types"
import axios from "axios";
import { Actions } from "./actions";

interface LocalState {
    mobiles: Mobile[],
    fetchMobiles: Function,
    fetchSuccess: Function,
    fetchError: Function
}

const mapStateToProps = (state: RootState) => ({
    mobiles: state.mobiles as Mobile[]
})

const mapDispatchToProps = {
    fetchMobiles: Actions.fetchMobiles,
    fetchSuccess: Actions.fetchMobilesSuccess,
    fetchFail: Actions.fetchMobilesError
}

class PhoneListContainer extends React.Component<LocalState, {}> {
    componentDidMount() {
        this.props.fetchMobiles()
        axios.get(process.env.API)
            .then(response => {
                if (response.status < 400) {
                    this.props.fetchSuccess(response.data)
                } else {
                    this.props.fetchError(response.statusText)
                }
            })
            .catch(error => {
                this.props.fetchError(error)
            })
    }
    render() {
        return <div>
            {this.props.mobiles.map(m => <div key={m.title}>{m.title}</div>)}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer)

