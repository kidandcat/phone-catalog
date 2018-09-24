import React from "react";
import { connect } from "react-redux";
import { RootState } from "./reducer";
import { Mobile } from "./types"
import axios from "axios";
import { Actions } from "./actions";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => ({
    mobiles: state.mobiles as Mobile[]
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchMobiles: () => dispatch(Actions.fetchMobiles()),
    fetchSuccess: (data: Mobile[]) => dispatch(Actions.fetchMobilesSuccess(data)),
    fetchFail: (msg: string) => dispatch(Actions.fetchMobilesError(msg)),
})

type ContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

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

