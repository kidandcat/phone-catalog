import React from "react";
import { RootState } from "./reducer";
import { Mobile } from "./types";
import { Actions } from "./actions";
import { push } from "connected-react-router";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
    mobiles: state.mobiles as Mobile[]
})

const mapDispatchToProps = {
    fetchMobiles: Actions.fetchMobiles,
    fetchSuccess: Actions.fetchMobilesSuccess,
    fetchFail: Actions.fetchMobilesError,
    push
}

type ContainerProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & { match: { params: { id: string } } };

class PhoneDetailComponentClass extends React.Component<ContainerProps> {
    render() {
        const mobile = this.props.mobiles.filter(m => m.id === parseInt(this.props.match.params.id))[0]
        return <div>
            Detail
            {mobile && mobile.title}
        </div>
    }
}

export const PhoneDetailComponent = connect(mapStateToProps, mapDispatchToProps)(PhoneDetailComponentClass)