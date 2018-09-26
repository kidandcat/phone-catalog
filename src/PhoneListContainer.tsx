import React from "react";
import { connect } from "react-redux";
import { RootState } from "./reducer";
import { Mobile } from "./types"
import axios from "axios";
import { Actions } from "./actions";

const mapStateToProps = (state: RootState) => ({
    mobiles: state.mobiles as Mobile[]
})

const mapDispatchToProps = {
    fetchMobiles: Actions.fetchMobiles,
    fetchSuccess: Actions.fetchMobilesSuccess,
    fetchFail: Actions.fetchMobilesError,
}

type ContainerProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

class PhoneListContainer extends React.Component<ContainerProps, {}> {
    componentDidMount() {
        this.props.fetchMobiles()
        axios.get(process.env.API)
            .then(response => {
                if (response.status < 400) {
                    this.props.fetchSuccess(response.data)
                } else {
                    this.props.fetchFail(response.statusText)
                }
            })
            .catch(error => {
                this.props.fetchFail(error)
            })
    }
    render() {
        return <div>
            {this.props.mobiles.map(m => <div key={m.title}>{m.title}</div>)}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer)

