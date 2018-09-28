import React from "react";
import { RootState } from "./reducer";
import { Mobile } from "./types";
import { Actions } from "./actions";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { ScaleInOut } from "react-uwp/Animate";
import Separator from "react-uwp/Separator";
import ListView from "react-uwp/ListView";
import Icon from "react-uwp/Icon";

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
        return <React.Fragment>
            {mobile && <ScaleInOut speed={1000}>
                <ListView listSource={[
                    <div style={{ display: "flex", width: "100%" }}>
                        <Icon onClick={() => this.props.push("/")} style={{ cursor: "pointer", backgroundColor: "rgba(255,255,255,0.2)", padding: 5 }}>{"\uE80F"}</Icon>
                        <p style={{ flexGrow: 1, textAlign: "center" }}>{mobile.title}</p>
                    </div>,
                    <Separator />,
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <p>Description:</p>
                        <p style={{ marginLeft: 10 }}>{mobile.description}</p>
                    </div>,
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <p>Color:</p>
                        <p>{mobile.color}</p>
                    </div>,
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <p>Price:</p>
                        <p>{mobile.price}€</p>
                    </div>,
                    <div style={{ width: "100%" }}>
                        <img src={mobile.image} alt="" style={{ maxWidth: "100%" }} />
                    </div>
                ]}>
                </ListView>
            </ScaleInOut>}
        </React.Fragment>
    }
}

export const PhoneDetailComponent = connect(mapStateToProps, mapDispatchToProps)(PhoneDetailComponentClass)